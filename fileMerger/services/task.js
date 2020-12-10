const {getUserTasksResolver} = require("../resolvers/taskManagerResolvers");


const {
    dismissUserCompletedTasksResolver,
    dismissTaskResolver
} = require("../resolvers/taskManagerResolvers")
module.exports={
    taskManagerQuery: {
        userTasks: getUserTasksResolver
    }
,
    taskManagerMutation: {
        dismissTask: dismissTaskResolver,
        dismissUserCompletedTasks: dismissUserCompletedTasksResolver
    }
}