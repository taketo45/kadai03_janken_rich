
console.log('read sidebar.js');
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.game-link');
  console.log(links);
  const iframes = document.querySelectorAll('#gameerea iframe');
  console.log(iframes);

  // 初期状態で最初のiframeを表示
  iframes[0].classList.add('active');
  console.log('iframes[0] display');
  links.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          console.log(this.getAttribute('href'));
          console.log(`${targetId} got!`);

          iframes.forEach((iframe,id) => {
              if (iframe.id === targetId) {
                  iframe.classList.add('active');
                  console.log(`★iframe No:${id},${iframe.id} activated!`);
              } else {
                  iframe.classList.remove('active');
                  console.log(`iframe No:${id},${iframe.id} deactivated!`);
              }
          });
      });
  });
});