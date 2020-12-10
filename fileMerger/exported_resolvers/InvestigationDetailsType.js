const {getWsType} = require("../resolvers/entitiesResolvers");
const {pipeResolver} = require("../utils");
const {lastUpdateDateResolver} = require("../resolvers/entitiesResolvers");
const {getClassificationResolver} = require("../resolvers/classificationResolver");
const { flow, get, trimCharsStart, add, __ } = require('lodash/fp')

const {
    createResolverWithArgs
} = require('../utils')



module.exports = {
    InvestigationDetailsType: {
        classification: createResolverWithArgs(getClassificationResolver,
            (parent) => ({getClassificationInput: {entityId: parent.id}})),
        updated:  createResolverWithArgs(
            lastUpdateDateResolver,
            (parent) => ({
                getLastUpdateDateInput: {
                    type: getWsType(parent),
                    id: parent.id
                }
            })
        ),
        tags:pipeResolver

    }
}