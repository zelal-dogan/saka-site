const img = document.getElementById('richardFoto');

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

function setupCanvas() {
    canvas.width = img.clientWidth;
    canvas.height = img.clientHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'auto';

    img.parentNode.style.position = 'relative';
    img.parentNode.appendChild(canvas);
}

setupCanvas();

let drawing = false;
let brushColor = '#ff69b4'; // default renk
let brushSize = 2;

function makyajYap(color) {
    brushColor = '#' + color;
}

// Fare hareketleriyle çizimi kontrol et

canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    draw(e);
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.beginPath(); // yeni çizime başlamak için path reset
});

canvas.addEventListener('mouseout', () => {
    drawing = false;
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);

function draw(e) {
    if (!drawing) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = brushColor;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}
