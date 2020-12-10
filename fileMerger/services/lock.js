const {dummyResolver} = require("../utils");

const {userByUserNameResolverWrapper} = require('../resolvers/usersResolvers');

const {userByUserNameResolverWrapper} = require('../resolvers/usersResolvers');

const {
    lockEntityResolver,
    unlockEntityResolver,
    namedLockResolver,
    namedUnLockResolver
} = require("../resolvers/lockResolvers");

const {
    lockStatusResolver,
    userLocksResolver
} = require('../resolvers/lockResolvers')
module.exports={
    lockAndQuery:{
        lock:dummyResolver,
        query:dummyResolver
    }
,
    lockReplyType:{
        lockingUser:userByUserNameResolverWrapper
    }
,
    lockStatusType:{
        lockingUser:userByUserNameResolverWrapper
    }
,
    lockMutations: {
        lockEntity: lockEntityResolver,
        unlockEntity: unlockEntityResolver,
        namedLock: namedLockResolver,
        namedUnLock: namedUnLockResolver
    }
,
    lock: {
        lockStatus: lockStatusResolver,
        userLocks: userLocksResolver
    }
}