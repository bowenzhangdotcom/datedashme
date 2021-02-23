import json

with open("matches.json") as f:
    data = json.load(f)

for interaction in data:
    if "chats" in interaction:
        for chat in interaction["chats"]:
            chat["body"] = "Example Chat"
    if "block" in interaction:
        if "report_reason" in interaction["block"][0]:
            interaction["block"][0]["report_reason"] = "Example Reason"
        if "report_detail" in interaction["block"][0]:
            interaction["block"][0]["report_detail"] = "Example Detail"
    if "like" in interaction:
        if "comment" in interaction["like"][0]:
            interaction["like"][0]["comment"] = "Example Comment"

with open("generic_matches.json", "w") as json_file:
    json.dump(data, json_file)
