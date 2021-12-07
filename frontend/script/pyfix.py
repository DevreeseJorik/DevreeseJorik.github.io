import json
import pathlib

file_path = str(pathlib.Path(__file__).parent.resolve())

with open(file_path  + '/maps.json',"r") as file:
        json_obj = json.load(file)

tempMapLayout = {"map_layout":{}}
for map in json_obj["map_layout"]:
    chunk = int(map[5:])
    if (chunk >= 464): 
        chunk +=29
    tempMapLayout["map_layout"][f"Index{chunk}"] = json_obj["map_layout"][map]
    

new_object = json.dumps(tempMapLayout)

with open(file_path + "/newmaps.json","w") as file:
    file.write(new_object)


print(tempMapLayout)
