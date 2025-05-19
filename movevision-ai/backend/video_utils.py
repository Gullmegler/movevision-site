import cv2
import os

def extract_frames(video_path, output_folder, frame_rate=10):
    cap = cv2.VideoCapture(video_path)
    count = 0
    saved = 0
    os.makedirs(output_folder, exist_ok=True)

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        if count % frame_rate == 0:
            frame_path = os.path.join(output_folder, f"frame_{saved}.jpg")
            cv2.imwrite(frame_path, frame)
            saved += 1
        count += 1
    cap.release()
    return saved
