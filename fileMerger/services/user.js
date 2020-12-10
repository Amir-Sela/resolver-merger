const {
    GetUserPreferencesForTypeResolver,
    GetUserPreferenceMarksResolver,
    GetUserPrefMarksForSuppliedIdsResolver,
    GetUserSettingsByTypeResolver,
    GetUserSettingsResolver,
    GetUserSettingByTypeAndKeyResolver,
} = require('../resolvers/userPreferenceResolver')

const {usersClassificationResolver} = require("../resolvers/usersResolvers");

const {syncUsersFromAdResolver, updateUserResolver, createUserResolver} = require("../resolvers/usersResolvers");

const {
    usersResolver,
    groupsResolver,
    usersByUsersNameResolver,
    userFromADResolver,
    getLastSyncTimeResolver,
    userByUserNameResolver
} = require('../resolvers/usersResolvers')

const {
    AddEntityIdToUserPrefTypeResolver,
    RemoveEntityIdToUserPrefTypeResolver,
    ReplaceUserSettingsForTypeResolver,
    AddUserSettingByTypeAndKeyResolver,
    RemoveUserSettingByTypeAndKeyResolver
} = require("../resolvers/userPreferenceResolver");
module.exports={
    userPrefQuery: {
        GetUserPreferencesForType: GetUserPreferencesForTypeResolver,
        GetUserPreferenceMarks: GetUserPreferenceMarksResolver,
        GetUserPrefMarksForSuppliedIds: GetUserPrefMarksForSuppliedIdsResolver,
        GetUserSettingByType: GetUserSettingsByTypeResolver,
        GetUserSettings: GetUserSettingsResolver,
        GetUserSettingByTypeAndKey: GetUserSettingByTypeAndKeyResolver
    }
,
    userType: {
        classificationId: usersClassificationResolver
    }
,
    userMutationType: {
        createUser: createUserResolver,
        updateUser: updateUserResolver,
        syncUsersFromAd: syncUsersFromAdResolver
    }
,
    userQuery: {
        users: usersResolver,
        groups: groupsResolver,
        userByUserName: userByUserNameResolver,
        getUsersByNames: usersByUsersNameResolver,
        getUserFromAd: userFromADResolver,
        getLastSyncTime: getLastSyncTimeResolver
    }
,
    userPrefMutationQuery: {
        AddEntityIdToUserPrefType: AddEntityIdToUserPrefTypeResolver,
        RemoveEntityIdToUserPrefType: RemoveEntityIdToUserPrefTypeResolver,
        ReplaceUserSettingsForType: ReplaceUserSettingsForTypeResolver,
        AddUserSettingByTypeAndKey: AddUserSettingByTypeAndKeyResolver,
        RemoveUserSettingByTypeAndKey: RemoveUserSettingByTypeAndKeyResolver
    }
}