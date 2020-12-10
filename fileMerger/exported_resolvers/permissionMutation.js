const {setPermissionsResolver} = require("../resolvers/permissionsResolver");
const {setClassificationResolver} = require("../resolvers/classificationResolver");
module.exports = {
    permissionMutation: {
        setPermissions: setPermissionsResolver,
        setClassification: setClassificationResolver
    }
}