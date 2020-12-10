const {addRemarksResolver} = require("../resolvers/remarksResolver");

const {
    getRemarksResolver
} = require('../resolvers/remarksResolver')
module.exports={
    remarksMutation: {
        addRemarks: addRemarksResolver
    }
,
    remarksQuery: {
        getRemarks: getRemarksResolver
    }
}