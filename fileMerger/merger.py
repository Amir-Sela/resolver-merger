import glob
from os import listdir, rename,remove


def lower_case_files():
    files = listdir("exported_resolvers")
    for file in files:
        rename("exported_resolvers/" + file, "exported_resolvers/" + file.lower())


def clean(x):
    x = x[x.find("module.exports"):]
    x = x[x.find("{") + 1:x.rfind("}")]
    return x


def import_require(x):
    return x[:x.find("module.exports")]


def run():
    input_files = ["alert", "auth", "bi", "case", "chatbot", "classification", "config", "content", "corona", "create",
                   "dashboard", "dl", "enrichment", "entity", "enum",
                   "extended", "face", "file", "generic", "get", "history", "import", "investigation", "kardex",
                   "label", "link", "lock", "log", "lpr", "mattermost", "named",
                   "ner", "news", "order", "organization", "orgtree", "permission", "permitted", "pir", "pmsearch",
                   "position", "presence", "publish", "query", "regional","remark", "report", "root", "save", "search", "stt",
                   "studio", "synopsis", "tag", "task", "telephony", "text", "update", "user", "vconnector",
                   "visualization", "web", "word", "work"]
    input_data = []
    input_import = []
    for started_name in input_files:
        for file_name in glob.glob(f"exported_resolvers/{started_name}*"):
            f = open(file_name, "r")
            input_data.append(clean(f.read()))
            f = open(file_name, "r")
            input_import.append(import_require(f.read()))
            remove(file_name)

        output = "module.exports={" + ",".join([item for item in input_data]) + "}"
        w = open(f"services/{started_name}.js", "w")
        w.write("\n".join(input_import) + output)
        input_data.clear()
        input_import.clear()

lower_case_files()
run()
