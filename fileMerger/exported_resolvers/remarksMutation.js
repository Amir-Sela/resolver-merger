const {addRemarksResolver} = require("../resolvers/remarksResolver");
module.exports = {
    remarksMutation: {
        addRemarks: addRemarksResolver
    }
}