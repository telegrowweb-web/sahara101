for (const [trigger, id] of [['privacy', 'privacy-dialog'], ['read-story', 'story-dialog']]) {
  const dialog = document.getElementById(id);
  document.getElementById(trigger).addEventListener('click', () => dialog.showModal());
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const r = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom)) dialog.close();
  });
}
