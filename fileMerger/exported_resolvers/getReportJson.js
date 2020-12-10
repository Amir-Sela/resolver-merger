const {
    getReportJsonResolver,
    getCaseReportResolver
} = require('../resolvers/reportResolver')
module.exports = {
    getReportJson: {
        getReportJson: getReportJsonResolver,
        getCaseReport: getCaseReportResolver
    }
}