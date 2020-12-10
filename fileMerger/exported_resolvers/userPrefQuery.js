const {
    GetUserPreferencesForTypeResolver,
    GetUserPreferenceMarksResolver,
    GetUserPrefMarksForSuppliedIdsResolver,
    GetUserSettingsByTypeResolver,
    GetUserSettingsResolver,
    GetUserSettingByTypeAndKeyResolver,
} = require('../resolvers/userPreferenceResolver')
module.exports = {
    userPrefQuery: {
        GetUserPreferencesForType: GetUserPreferencesForTypeResolver,
        GetUserPreferenceMarks: GetUserPreferenceMarksResolver,
        GetUserPrefMarksForSuppliedIds: GetUserPrefMarksForSuppliedIdsResolver,
        GetUserSettingByType: GetUserSettingsByTypeResolver,
        GetUserSettings: GetUserSettingsResolver,
        GetUserSettingByTypeAndKey: GetUserSettingByTypeAndKeyResolver
    }
}