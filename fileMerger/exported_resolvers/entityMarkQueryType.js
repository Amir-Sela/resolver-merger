const {
    getEntityMarkTypeResolver,
    getEntityAllMarksResolver
} = require('../resolvers/entityMarkResolvers')
module.exports = {
    entityMarkQueryType: {
        getEntityMarkType: getEntityMarkTypeResolver,
        getAllEntityMarks: getEntityAllMarksResolver
    }
}