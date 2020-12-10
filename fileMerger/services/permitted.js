const {
    permittedRolesResolver,
    permittedGroupsResolver,
    permittedUsersResolver
} = require("../resolvers/permissionsResolver")
module.exports={
    permittedEntitiesType: {
        users: permittedUsersResolver,
        groups: permittedGroupsResolver,
        roles: permittedRolesResolver
    }
}