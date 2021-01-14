const { ethers } = require("hardhat");
const { expectBNEq, expectRevert, getLatestBlockTime, BN } = require("./Utils");

const { fromRpcSig } = require("ethereumjs-util");
const ethSigUtil = require("eth-sig-util");

const { expect } = require("chai");
const { provider } = ethers;

const tokenName = "DFX Token";
const chainId = 1;
const version = "1";

const Permit = [
  { name: "owner", type: "address" },
  { name: "spender", type: "address" },
  { name: "value", type: "uint256" },
  { name: "nonce", type: "uint256" },
  { name: "deadline", type: "uint256" },
];

const EIP712Domain = [
  { name: "name", type: "string" },
  { name: "version", type: "string" },
  { name: "chainId", type: "uint256" },
  { name: "verifyingContract", type: "address" },
];

async function domainSeparator(name, version, chainId, verifyingContract) {
  return (
    "0x" +
    ethSigUtil.TypedDataUtils.hashStruct(
      "EIP712Domain",
      { name, version, chainId, verifyingContract },
      { EIP712Domain }
    ).toString("hex")
  );
}

async function signPermit(addr, privateKey, message) {
  const data = {
    primaryType: "Permit",
    types: {
      EIP712Domain,
      Permit,
    },
    domain: {
      name: "DFX Token",
      version: "1",
      chainId: "1",
      verifyingContract: addr,
    },
    message: message,
  };

  const pk = Buffer.from(privateKey.substring(2), "hex");

  // eslint-disable-next-line
  const sig = ethSigUtil.signTypedData(pk, { data });
  const { v, r, s } = fromRpcSig(sig);

  return { v, r, s };
}

describe("token", function () {
  let owner, user;

  let Token;
  let token;

  before(async () => {
    [owner] = await ethers.getSigners();

    user = ethers.Wallet.createRandom().connect(provider);

    // Give user some Ethers
    await owner.sendTransaction({
      to: user.address,
      value: ethers.utils.parseEther("5"),
    });

    Token = await ethers.getContractFactory("DFXToken");
  });

  beforeEach(async function () {
    token = await Token.connect(owner).deploy({ gasLimit: 8000000 });
  });

  describe("initial setup", async function () {
    it("initial nonce is 0", async function () {
      expectBNEq(await token.nonces(user.address), BN(0));
    });

    it("domain separator", async function () {
      expect(await token.DOMAIN_SEPARATOR()).to.equal(
        await domainSeparator(tokenName, version, chainId, token.address)
      );
    });
  });

  describe("mint", function () {
    describe("not from owner", function () {
      it("reverts", async function () {
        await expectRevert(
          token.connect(user).mint(user.address, 100),
          "Ownable: caller is not the owner"
        );
      });
    });
  });

  describe("delegate", function () {
    describe("zero deadline", function () {
      let signature;

      beforeEach(async function () {
        signature = await signPermit(token.address, user.privateKey, {
          owner: user.address,
          spender: owner.address,
          value: BN(1234).toString(),
          nonce: 0,
          deadline: 0,
        });
      });

      it("reverts", async function () {
        await expectRevert(
          token.permit(
            user.address,
            owner.address,
            1234,
            0,
            signature.v,
            signature.r,
            signature.s
          ),
          "ERC20Permit: expired deadline"
        );
      });
    });

    describe("valid expiration", function () {
      beforeEach(async function () {
        const expiration = (await getLatestBlockTime()) + 100;
        const signature = await signPermit(token.address, user.privateKey, {
          owner: user.address,
          spender: owner.address,
          value: BN(1234).toString(),
          nonce: 0,
          deadline: expiration,
        });

        await token.permit(
          user.address,
          owner.address,
          1234,
          expiration,
          signature.v,
          signature.r,
          signature.s
        );
      });

      it("approves", async function () {
        expectBNEq(
          await token.allowance(user.address, owner.address),
          BN(1234)
        );
      });
    });

    describe("valid transferFrom", function () {
      beforeEach(async function () {
        const expiration = (await getLatestBlockTime()) + 100;
        const signature = await signPermit(token.address, user.privateKey, {
          owner: user.address,
          spender: owner.address,
          value: BN(1234).toString(),
          nonce: 0,
          deadline: expiration,
        });

        await token.permit(
          user.address,
          owner.address,
          1234,
          expiration,
          signature.v,
          signature.r,
          signature.s
        );
      });

      it("updates balance", async function () {
        await token.connect(owner).mint(user.address, BN(1234));

        await token
          .connect(owner)
          .transferFrom(user.address, owner.address, BN(1234));

        expectBNEq(await token.balanceOf(owner.address), BN(1234));
      });
    });

    describe("invalid nonce", function () {
      let expiration;
      let signature;

      beforeEach(async function () {
        expiration = (await getLatestBlockTime()) + 100;
        signature = await signPermit(token.address, user.privateKey, {
          owner: user.address,
          spender: owner.address,
          value: BN(1234).toString(),
          nonce: 10,
          deadline: expiration,
        });
      });

      it("reverts", async function () {
        await expectRevert(
          token.permit(
            user.address,
            owner.address,
            1234,
            expiration,
            signature.v,
            signature.r,
            signature.s
          ),
          "ERC20Permit: invalid signature"
        );
      });
    });

    describe("nonce reuse", function () {
      let expiration;
      let signature;

      beforeEach(async function () {
        expiration = (await getLatestBlockTime()) + 100;
        signature = await signPermit(token.address, user.privateKey, {
          owner: user.address,
          spender: owner.address,
          value: BN(1234).toString(),
          nonce: 0,
          deadline: expiration,
        });

        await token.permit(
          user.address,
          owner.address,
          1234,
          expiration,
          signature.v,
          signature.r,
          signature.s
        );

        signature = await signPermit(token.address, user.privateKey, {
          owner: user.address,
          spender: owner.address,
          value: BN(5678).toString(),
          nonce: 0,
          deadline: expiration,
        });
      });

      it("reverts", async function () {
        await expectRevert(
          token.permit(
            user.address,
            owner.address,
            5678,
            expiration,
            signature.v,
            signature.r,
            signature.s
          ),
          "ERC20Permit: invalid signature"
        );
      });
    });

    describe("expired", function () {
      let expiration;
      let signature;

      beforeEach(async function () {
        expiration = (await getLatestBlockTime()) - 100;
        signature = await signPermit(token.address, user.privateKey, {
          owner: user.address,
          spender: owner.address,
          value: BN(1234).toString(),
          nonce: 0,
          deadline: expiration,
        });
      });

      it("reverts", async function () {
        await expectRevert(
          token.permit(
            user.address,
            owner.address,
            1234,
            expiration,
            signature.v,
            signature.r,
            signature.s
          ),
          "ERC20Permit: expired deadline"
        );
      });
    });

    describe("signature mismatch", function () {
      let expiration;
      let signature;

      beforeEach(async function () {
        expiration = (await getLatestBlockTime()) + 100;
        signature = await signPermit(token.address, user.privateKey, {
          owner: user.address,
          spender: owner.address,
          value: BN(1234).toString(),
          nonce: 0,
          deadline: expiration,
        });
      });

      it("reverts", async function () {
        await expectRevert(
          token.permit(
            user.address,
            owner.address,
            1235,
            expiration,
            signature.v,
            signature.r,
            signature.s
          ),
          "ERC20Permit: invalid signature"
        );
      });
    });
  });
});
