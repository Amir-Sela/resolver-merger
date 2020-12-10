const {loginResolver} = require("../resolvers/authResolver");
module.exports={
    authMutation: {
        login: loginResolver
    }
}