const {
    createLinksResolver,
    cloneLinksResolver,
    updateLinkResolver,
    deleteLinkResolver,
    setLinksResolver
} = require("../resolvers/linksResolvers");
module.exports = {
    linkMutationType: {
        createLink: createLinksResolver,
        cloneLinks: cloneLinksResolver,
        updateLink: updateLinkResolver,
        deleteLink: deleteLinkResolver,
        setLinks: setLinksResolver
    }
}