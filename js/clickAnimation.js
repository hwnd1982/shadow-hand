export const clickAnimation = () => {
  document.addEventListener('click', e => {
    const button = e.target.closest('.get-it-now');
    
    if (!button) return;
  
    const size = button.offsetWidth * 2;
    const {layerX: left, layerY: top} = e;
    const circlesOnTheWater = document.createElement('div');

    // e.preventDefault();
    circlesOnTheWater.className = 'circles-on-the-water';
    circlesOnTheWater.style.setProperty('--top', `${top}px`);
    circlesOnTheWater.style.setProperty('--left', `${left}px`);
    circlesOnTheWater.style.setProperty('--size', `${size}px`);
    button.append(circlesOnTheWater);
    
    circlesOnTheWater.animate([
      {transform: `translate(-50%, -50%) scale(0)`, opacity: 1},
      {transform: `translate(-50%, -50%) scale(1)`, opacity: .2}],
      {duration: 400}).onfinish = () => {
        circlesOnTheWater.remove();
      };
  });
};
