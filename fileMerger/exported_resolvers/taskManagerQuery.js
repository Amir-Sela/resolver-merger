const {getUserTasksResolver} = require("../resolvers/taskManagerResolvers");

module.exports = {
    taskManagerQuery: {
        userTasks: getUserTasksResolver
    }
}