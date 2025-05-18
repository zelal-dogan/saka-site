const dartArea = document.querySelector('.dart-area');
const dartSound = document.getElementById('dartSound');

let rotation = 0; // derece
const rotationSpeed = 360 / 5000; // 360 derece 5 saniyede dönüyor

function animate(time) {
  if (!animate.lastTime) animate.lastTime = time;
  const delta = time - animate.lastTime;
  animate.lastTime = time;

  rotation = (rotation + rotationSpeed * delta) % 360;

  dartArea.style.transform = `rotate(${rotation}deg)`;

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

dartArea.addEventListener('click', (event) => {
  const rect = dartArea.getBoundingClientRect();

  // Fare pozisyonu dartArea göre
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Dart alanının merkezi
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  // Fare ile merkezin farkı
  const dx = x - centerX;
  const dy = y - centerY;

  // Rotasyon açısını radiyana çevir, negatif çünkü ters çevireceğiz
  const angle = -rotation * (Math.PI / 180);

  // Fare koordinatlarını dartArea'nın orijinal konumuna göre döndür (rotasyonun tersini uygula)
  const rotatedX = dx * Math.cos(angle) - dy * Math.sin(angle) + centerX;
  const rotatedY = dx * Math.sin(angle) + dy * Math.cos(angle) + centerY;

  // + işaretini oluştur
  const mark = document.createElement('div');
  mark.classList.add('dart-mark');

  // + işaretinin pozisyonunu dartArea içinde ayarla
  mark.style.left = `${rotatedX}px`;
  mark.style.top = `${rotatedY}px`;

  mark.textContent = '+';

  dartArea.appendChild(mark);

  dartSound.currentTime = 0;
  dartSound.play();
});
