import cv2
import os

# Eksempel: vekt og volumestimater per objekt (kan utvides etter behov)
OBJECT_SPECS = {
    "chair": {"weight": 7, "volume": 0.5},
    "sofa": {"weight": 30, "volume": 2.0},
    "bed": {"weight": 50, "volume": 3.5},
    "table": {"weight": 20, "volume": 1.2},
    "potted plant": {"weight": 3, "volume": 0.3},
    "dining table": {"weight": 25, "volume": 1.8},
    "sink": {"weight": 15, "volume": 0.9},
    "clock": {"weight": 2, "volume": 0.2},
    "vase": {"weight": 1, "volume": 0.1}
    # Legg til flere etter behov
}

def detect_objects_in_image(model, image_path):
    results = model(image_path)
    labels = []
    total_weight = 0.0
    total_volume = 0.0

    image = cv2.imread(image_path)

    for r in results:
        for box in r.boxes:
            cls = int(box.cls[0])
            label = model.names[cls]
            labels.append(label)

            specs = OBJECT_SPECS.get(label, {"weight": 0, "volume": 0})
            total_weight += specs["weight"]
            total_volume += specs["volume"]

            x1, y1, x2, y2 = map(int, box.xyxy[0])
            cv2.rectangle(image, (x1, y1), (x2, y2), (0, 255, 0), 2)
            cv2.putText(image, label, (x1, y1 - 5), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 255, 0), 2)

    return {
        "detekterte_objekter": labels,
        "total_vekt_kg": round(total_weight, 2),
        "total_volum_m3": round(total_volume, 2),
        "output_image": image
    }

def detect_objects_in_folder(model, folder_path):
    all_labels = []
    total_weight = 0.0
    total_volume = 0.0

    for filename in os.listdir(folder_path):
        if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
            result = detect_objects_in_image(model, os.path.join(folder_path, filename))
            all_labels.extend(result["detekterte_objekter"])
            total_weight += result["total_vekt_kg"]
            total_volume += result["total_volum_m3"]

    return {
        "detekterte_objekter": all_labels,
        "total_vekt_kg": round(total_weight, 2),
        "total_volum_m3": round(total_volume, 2)
    }

