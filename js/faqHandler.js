export const faqHandler = () => {
  const faqList = document.querySelector('.faq__list');

  if (!faqList) return;

  const activeItems = faqList.getElementsByClassName('_active');

  faqList.addEventListener('click', ({target}) => {
    const [active] = activeItems;
    const head = target.closest('.faq-item__head');

    if (!head) return;

    
    
    if (active) {
      const activeBody = active.nextElementSibling;
      const activeHeight = activeBody.firstElementChild.offsetHeight;

      activeBody.animate([{height: `${activeHeight}px`}, {height: 0}], {duration: 400})
        .onfinish = () => active.classList.remove('_active');
    }
    
    if (head !== active) {
      const targetBody = head.nextElementSibling;
      const targetHeight = targetBody.firstElementChild.offsetHeight

      targetBody.animate([{height: 0}, {height: `${targetHeight}px`}], {duration: 400})
        .onfinish = () => head.classList.add('_active');
    }


  });
};