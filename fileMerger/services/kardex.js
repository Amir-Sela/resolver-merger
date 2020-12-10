const {
    info_resolver,
    search_resolver,
    sources_resolver
} = require('../resolvers/kardex_search')

module.exports={
    kardex_search_query: {
        info: info_resolver,
        search: search_resolver,
        sources: sources_resolver
    }
}