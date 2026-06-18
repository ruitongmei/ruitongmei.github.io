document.addEventListener('DOMContentLoaded', function() {
  const isZh = (document.documentElement.lang || '').toLowerCase().startsWith('zh');
  const topButton = document.createElement('button');
  const bottomButton = document.createElement('button');

  topButton.id = 'back-to-top';
  topButton.type = 'button';
  topButton.textContent = isZh ? '返回顶部' : 'Back to Top';
  topButton.setAttribute('aria-label', topButton.textContent);

  bottomButton.id = 'back-to-bottom';
  bottomButton.type = 'button';
  bottomButton.textContent = isZh ? '到底部' : 'To Bottom';
  bottomButton.setAttribute('aria-label', bottomButton.textContent);

  document.body.appendChild(topButton);
  document.body.appendChild(bottomButton);

  topButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  bottomButton.addEventListener('click', function() {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  });

  function updateButtons() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const hasLongPage = maxScroll > 500;
    const nearTop = scrollTop < 180;

    topButton.classList.remove('visible');
    bottomButton.classList.remove('visible');

    if (!hasLongPage) {
      return;
    }

    if (nearTop) {
      bottomButton.classList.add('visible');
    } else {
      topButton.classList.add('visible');
    }
  }

  window.addEventListener('scroll', updateButtons, { passive: true });
  window.addEventListener('resize', updateButtons);
  updateButtons();
});
