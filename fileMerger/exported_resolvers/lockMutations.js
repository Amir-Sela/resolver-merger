const {
    lockEntityResolver,
    unlockEntityResolver,
    namedLockResolver,
    namedUnLockResolver
} = require("../resolvers/lockResolvers");
module.exports = {
    lockMutations: {
        lockEntity: lockEntityResolver,
        unlockEntity: unlockEntityResolver,
        namedLock: namedLockResolver,
        namedUnLock: namedUnLockResolver
    }
}