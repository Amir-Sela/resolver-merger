const {setLinksResolver} = require("../resolvers/linksResolvers");
const {getPirResolver} = require("../resolvers/pirResolver");
const {createResolverWithArgs} = require("../utils")
const {set} = require('lodash/fp')

module.exports = {
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
}