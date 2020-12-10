const {
    AddEntityIdToUserPrefTypeResolver,
    RemoveEntityIdToUserPrefTypeResolver,
    ReplaceUserSettingsForTypeResolver,
    AddUserSettingByTypeAndKeyResolver,
    RemoveUserSettingByTypeAndKeyResolver
} = require("../resolvers/userPreferenceResolver");
module.exports = {
    userPrefMutationQuery: {
        AddEntityIdToUserPrefType: AddEntityIdToUserPrefTypeResolver,
        RemoveEntityIdToUserPrefType: RemoveEntityIdToUserPrefTypeResolver,
        ReplaceUserSettingsForType: ReplaceUserSettingsForTypeResolver,
        AddUserSettingByTypeAndKey: AddUserSettingByTypeAndKeyResolver,
        RemoveUserSettingByTypeAndKey: RemoveUserSettingByTypeAndKeyResolver
    }
}