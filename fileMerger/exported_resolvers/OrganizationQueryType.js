const {
    getOrganizerRelatedEntities,
    getOrganizerChapterRelatedEntityResolver
} = require('../resolvers/organizerResolver');
module.exports = {
    OrganizationQueryType: {
        getOrganizerRelatedEntities: getOrganizerRelatedEntities,
        getOrganizerChapterRelatedEntity: getOrganizerChapterRelatedEntityResolver
    }
}