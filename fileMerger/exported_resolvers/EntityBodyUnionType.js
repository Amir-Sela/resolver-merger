module.exports = {
    EntityBodyUnionType: {
        __resolveType: (value, context, info) => {
            const entityType = value.__type.toLowerCase();
            return {
                file: info.getTypeMap()["FileType"],
                reportfile: info.getTypeMap()["ReportFileType"]
            }[entityType];
        }
    }
}