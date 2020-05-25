const setupDatabase = require('./lib/db')
const setupAgentModel = require('./models/agent')
const setupMetricModel = require('./models/metric')

// TODO:  function descriptive name
module.exports = async function (config) {
    const sequelize = setupDatabase(config);
    const AgentModel = setupAgentModel(config);
    const MetricModel = setupMetricModel(config);

    AgentModel.hasMany(MetricModel);
    MetricModel.BelongTo(AgentModel);
  
    const Agent = {}
    const Metric = {}

  return {
    Agent,
    Metric
  }
}
