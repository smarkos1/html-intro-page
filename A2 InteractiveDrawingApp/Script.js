const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
const clearBtn = document.getElementById("clearBtn");
canvas.width = 600;
canvas.height = 400;
let isDrawing = false;
ctx.lineWidth = 3;
ctx.lineCap = "round";
ctx.strokeStyle = "black";
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});
canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;

  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
});
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});
canvas.addEventListener("mouseleave", () => {
  isDrawing = false;
});
clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
