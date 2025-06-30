
const videoElement = document.querySelector('.input_video');
const canvasElement = document.querySelector('.output_canvas');
const canvasCtx = canvasElement.getContext('2d');
const statusText = document.getElementById('status');
const timerDisplay = document.getElementById('timer');

canvasElement.width = 640;
canvasElement.height = 480;

let EAR_THRESHOLD = 0.2;
let normalCounter = 0;
let lelahCounter = 0;

function getEAR(landmarks) {
  function distance(p1, p2) {
    return Math.hypot(p1.x - p2.x, p1.y - p2.y);
  }
  let left = landmarks.slice(33, 133);
  let right = landmarks.slice(362, 463);
  if (!left.length || !right.length) return 0;

  let leftEAR = distance(landmarks[159], landmarks[145]) / distance(landmarks[33], landmarks[133]);
  let rightEAR = distance(landmarks[386], landmarks[374]) / distance(landmarks[362], landmarks[263]);
  return (leftEAR + rightEAR) / 2;
}

const faceMesh = new FaceMesh({
  locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
});
faceMesh.setOptions({
  maxNumFaces: 1,
  refineLandmarks: true,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});
faceMesh.onResults((results) => {
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

  if (results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0) {
    for (const landmarks of results.multiFaceLandmarks) {
      drawConnectors(canvasCtx, landmarks, FACEMESH_TESSELATION, { color: '#00FF00', lineWidth: 1 });
      let ear = getEAR(landmarks);
      if (ear < EAR_THRESHOLD) {
        lelahCounter++;
        statusText.textContent = "Mata terlihat lelah...";
      } else {
        normalCounter++;
        statusText.textContent = "Mata terdeteksi normal.";
      }
    }
  } else {
    statusText.textContent = "Mata tidak terdeteksi. Harap dekatkan wajah.";
  }
  canvasCtx.restore();
});

const camera = new Camera(videoElement, {
  onFrame: async () => await faceMesh.send({ image: videoElement }),
  width: 640,
  height: 480
});
camera.start();

let timer = 120;
const interval = setInterval(() => {
  timer--;
  timerDisplay.textContent = timer;
  if (timer <= 0) {
    clearInterval(interval);
    let result = normalCounter > lelahCounter ? "normal" : "kelelahan";
    localStorage.setItem("hasil_deteksi", result);
    window.location.href = "hasil.html";
  }
}, 1000);
