import os
import shutil
import datetime

def make_index(source_path):
    current_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    head = '<head><link rel="stylesheet" href="styles.css"></head>'
    with open(os.path.join(source_path, 'index.html'), 'w') as file:
        file.write(f"<html>{head}<body>{current_time}</html>")
    print("index.html created")

def deploy(source_path, deploy_path):
    if os.path.exists(deploy_path):
        print("Deleting existing deployment")
        shutil.rmtree(deploy_path)
    shutil.copytree(source_path, deploy_path)
    print("Website deployed")

# Execution begins here
source_path = "src"
deploy_path = "live"
make_index(source_path)
deploy(source_path, deploy_path)
