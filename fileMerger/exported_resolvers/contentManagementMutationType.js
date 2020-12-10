const {unfreezeFileResolver} = require("../resolvers/contentManagementResolver");
const {freezeFileResolver} = require("../resolvers/contentManagementResolver");
const {createFileEntityResolver} = require("../resolvers/contentManagementResolver");
const {incrementMinorVersionResolver} = require("../resolvers/contentManagementResolver");
const {incrementMajorVersionResolver} = require("../resolvers/contentManagementResolver");
const {deleteFileEntityResolver} = require("../resolvers/contentManagementResolver");
const {cloneFileEntityResolver} = require("../resolvers/contentManagementResolver");
const {updateFileEntityResolver} = require("../resolvers/contentManagementResolver");
module.exports = {
    contentManagementMutationType: {
        updateFileEntity: updateFileEntityResolver,
        updateReportFileEntity: updateFileEntityResolver,
        cloneFileEntity: cloneFileEntityResolver,
        deleteFileEntity: deleteFileEntityResolver,
        incrementMajorVersion: incrementMajorVersionResolver,
        incrementMinorVersion: incrementMinorVersionResolver,
        createFile: createFileEntityResolver,
        freezeFile: freezeFileResolver,
        unfreezeFile: unfreezeFileResolver
    }
}