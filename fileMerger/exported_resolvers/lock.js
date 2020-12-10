const {
    lockStatusResolver,
    userLocksResolver
} = require('../resolvers/lockResolvers')
module.exports = {
    lock: {
        lockStatus: lockStatusResolver,
        userLocks: userLocksResolver
    }
}