import os
import cv2
from fastapi import FastAPI, UploadFile, File, Request
from fastapi.responses import FileResponse
from ultralytics import YOLO
from inference import detect_objects_in_image, detect_objects_in_folder
from video_utils import extract_frames
from pathlib import Path

app = FastAPI()

# Temporary directory for uploads
temp_dir = "temp"
os.makedirs(temp_dir, exist_ok=True)

model = YOLO("yolov8s.pt")

@app.post("/upload/")
async def upload_file(request: Request, file: UploadFile = File(...)):
    lang = request.query_params.get("lang", "en")
    file_path = os.path.join(temp_dir, file.filename)
    with open(file_path, "wb") as f:
        f.write(await file.read())

    file_extension = Path(file.filename).suffix.lower()

    if file_extension in ['.jpg', '.jpeg', '.png']:
        result = detect_objects_in_image(model, file_path, lang)
        output_image = result.pop("output_image")
        output_path = os.path.join(temp_dir, f"detected_{file.filename}")
        cv2.imwrite(output_path, output_image)

        return {
            ("message" if lang == "en" else "melding"): f"Image {file.filename} has been processed." if lang == "en" else f"Bilde {file.filename} er analysert.",
            **result,
            "file_url": f"http://127.0.0.1:8000/{file.filename}",
            "output_image_url": f"http://127.0.0.1:8000/{os.path.basename(output_path)}"
        }

    elif file_extension in ['.mp4', '.avi', '.mov']:
        frame_folder = os.path.join(temp_dir, "frames")
        os.makedirs(frame_folder, exist_ok=True)
        extract_frames(file_path, frame_folder)
        result = detect_objects_in_folder(model, frame_folder, lang)

        return {
            ("message" if lang == "en" else "melding"): f"Video {file.filename} has been processed." if lang == "en" else f"Video {file.filename} er analysert.",
            **result,
            "file_url": f"http://127.0.0.1:8000/{file.filename}"
        }

    return {"error": "Invalid file type. Only images and videos are supported." if lang == "en" else "Ugyldig filtype. Kun bilder og videoer støttes."}

@app.get("/{filename}")
def get_image(filename: str):
    file_path = os.path.join(temp_dir, filename)
    if os.path.exists(file_path):
        return FileResponse(file_path)
    return {"error": "File not found"}












