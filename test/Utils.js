const { ethers } = require("hardhat");
const { expect } = require("chai");

const { provider } = ethers;

const mine = async () => {
  await provider.send("evm_mine", []);
};

const increaseTime = async (ms) => {
  await provider.send("evm_increaseTime", [ms]);
};

const getLatestBlockTime = async () => {
  const blockNumber = await provider.getBlockNumber();
  const block = await provider.getBlock(blockNumber);

  return block.timestamp;
};

const expectBNEq = (a, b) => {
  if (!ethers.BigNumber.isBigNumber(a)) {
    expect(BN(a).eq(b)).to.be.equal(
      true,
      `${BN(a).toString()} is not equal to ${b.toString()}`
    );
  } else {
    expect(a.eq(b)).to.be.equal(
      true,
      `${a.toString()} is not equal to ${b.toString()}`
    );
  }
};

const expectBNAproxEq = (a, b, delta) => {
  const smallest = b.sub(delta);
  const biggest = b.add(delta);

  expect(a.gte(smallest) && a.lte(biggest)).to.be.equal(
    true,
    `${a.toString()} is not within ${delta.toString()} units from ${b.toString()}`
  );
};

const BN = (a) => {
  return ethers.BigNumber.from(a);
};

const expectEventIn = (txRecp, eventName, eventArgs) => {
  const foundEvents = [];

  for (const { event, args } of txRecp.events || []) {
    if (event === eventName && args) {
      foundEvents.push(Object.entries(args));

      let sameArgs = true;

      for (const [k, v] of Object.entries(eventArgs)) {
        if (ethers.BigNumber.isBigNumber(v)) {
          sameArgs = v.eq(args[k]) && sameArgs;
        } else {
          sameArgs = args[k] === v && sameArgs;
        }
      }

      if (sameArgs) {
        return;
      }
    }
  }

  expect.fail(
    `Event ${eventName} not found with ${JSON.stringify(
      eventArgs
    )}, instead found ${JSON.stringify(foundEvents)}`
  );
};

const expectRevert = async (promise, expectedError) => {
  // eslint-disable-next-line
  promise.catch(() => {}); // Catch all exceptions

  try {
    await promise;
  } catch (error) {
    if (error.message.indexOf(expectedError) === -1) {
      // When the exception was a revert, the resulting string will include only
      // the revert reason, otherwise it will be the type of exception (e.g. 'invalid opcode')
      const actualError = error.message.replace(
        /Returned error: VM Exception while processing transaction: (revert )?/,
        ""
      );
      expect(actualError).to.equal(
        expectedError,
        "Wrong kind of exception received"
      );
    }
    return;
  }

  expect.fail("Expected an exception but none was received");
};

module.exports = {
  expectBNEq,
  expectRevert,
  getLatestBlockTime,
  BN,
};
