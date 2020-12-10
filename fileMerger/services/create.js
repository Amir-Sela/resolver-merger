const {setLinksResolver} = require("../resolvers/linksResolvers");
const {getPirResolver} = require("../resolvers/pirResolver");
const {createResolverWithArgs} = require("../utils")
const {set} = require('lodash/fp')


const {getStateResolver} = require("../resolvers/visualizationResolvers");

const {requestEnrichmentsResolver} = require("../resolvers/enrichmentsFlowResolvers");
const{createResolverWithArgs} = require("../utils")

const {
    get
} = require('lodash/fp');
module.exports={
    createPirResponse: {
        pir: createResolverWithArgs(getPirResolver,
            (parent) => ({getPirInput: {id: parent.id}})),
        setLinks: createResolverWithArgs(setLinksResolver, (parent, {setLinkBaseType}) => {
            const modifiedLinks = setLinkBaseType.links.map(link => (Object.assign({}, link, {sourceId: parent.id},
                {sourceType: "Pir"})))
            const setLinkType = set(['links'])(modifiedLinks)(setLinkBaseType)
            return ({setLinkBaseType: setLinkType})
        })
    }
,
    createStateResult:{
        explorationBoardState:getStateResolver
    }
,
    createDraftFileResponseType: {
        setEnrichments: createResolverWithArgs(requestEnrichmentsResolver, (parent, {setEnrichments}, context, info) => {
            return {
                requestEnrichments: {
                    entityId: get('fileId', parent),
                    enrichments: setEnrichments
                }
            }
        })
    }
}