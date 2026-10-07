const assert = require("assert");
const { getActivityMessage } = require("../src/index");

const result = getActivityMessage("staging");

assert.strictEqual(
  result,
  "Activity Log Deployment - staging"
);

console.log("All tests passed!");
