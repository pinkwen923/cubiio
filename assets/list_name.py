import os

folder_name = "sharing-img"
# read file name
path = "./imgs/" + folder_name
dir_list = os.listdir(path)

# write
with open(folder_name + '.txt', 'w', encoding="utf-8") as f:
    for i in dir_list:
        f.writelines(i + "\n")