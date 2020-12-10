const {
    dismissUserCompletedTasksResolver,
    dismissTaskResolver
} = require("../resolvers/taskManagerResolvers")
module.exports = {
    taskManagerMutation: {
        dismissTask: dismissTaskResolver,
        dismissUserCompletedTasks: dismissUserCompletedTasksResolver
    }
}