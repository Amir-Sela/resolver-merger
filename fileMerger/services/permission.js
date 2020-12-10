const {setPermissionsResolver} = require("../resolvers/permissionsResolver");
const {setClassificationResolver} = require("../resolvers/classificationResolver");

const {
    permittedResolver,
} = require('../resolvers/permissionsResolver')
const {
    getClassificationResolver
} = require('../resolvers/classificationResolver')

module.exports={
    permissionMutation: {
        setPermissions: setPermissionsResolver,
        setClassification: setClassificationResolver
    }
,
    permissionsQuery: {
        permittedEntities: permittedResolver,
        getClassification: getClassificationResolver
    }
}