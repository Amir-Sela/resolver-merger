const {usersClassificationResolver} = require("../resolvers/usersResolvers");
module.exports = {
    userType: {
        classificationId: usersClassificationResolver
    }
}