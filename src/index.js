function getActivityMessage(environment = "development") {
  return `Activity Log Deployment - ${environment}`;
}

if (require.main === module) {
  console.log(getActivityMessage(process.env.NODE_ENV || "development"));
}

module.exports = { getActivityMessage };
