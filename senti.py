import os

folders = [
    "crop-recommendation/backend",
    "crop-recommendation/frontend/public",
    "crop-recommendation/frontend/src/components"
]

files = {
    "crop-recommendation/backend/app.py": "",
    "crop-recommendation/backend/requirements.txt": "",
    "crop-recommendation/backend/soil_measures.csv": "",
    "crop-recommendation/frontend/src/App.js": "",
    "crop-recommendation/frontend/src/index.js": "",
    "crop-recommendation/frontend/src/components/CropForm.js": "",
    "crop-recommendation/README.md": ""
}

# Create folders
for folder in folders:
    os.makedirs(folder, exist_ok=True)

# Create empty files
for filepath in files:
    with open(filepath, "w") as f:
        f.write(files[filepath])

print("✅ Folder structure created successfully!")
