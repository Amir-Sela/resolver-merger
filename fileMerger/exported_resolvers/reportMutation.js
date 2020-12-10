const {createReportResolver} = require("../resolvers/reportResolver");
module.exports = {
    reportMutation: {
        addReport: createReportResolver
    }
}