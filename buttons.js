const circles = document.querySelectorAll('.magnet');
const magnetDistance = 100; // Distância em pixels para o efeito de magnetismo.

document.addEventListener('mousemove', (e) => {
  circles.forEach((circle) => {
    // Pega as coordenadas de cada círculo.
    const circleRect = circle.getBoundingClientRect();
    const circleCenterX = circleRect.left + circleRect.width / 2;
    const circleCenterY = circleRect.top + circleRect.height / 2;

    // Calcula a distância do mouse até o centro do círculo.
    const distanceX = e.clientX - circleCenterX;
    const distanceY = e.clientY - circleCenterY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    // Se o mouse estiver dentro do alcance, aplica o efeito de "atração".
    if (distance < magnetDistance) {
      const strength = 1 - distance / magnetDistance; // Força proporcional à proximidade.
      const translateX = distanceX * strength * 0.5; // Multiplicador ajusta a intensidade.
      const translateY = distanceY * strength * 0.5;

      circle.style.transform = `translate(${translateX}px, ${translateY}px)`;
    } else {
      // Reseta a posição do círculo quando o mouse sai do alcance.
      circle.style.transform = `translate(0, 0)`;
    }
  });
});