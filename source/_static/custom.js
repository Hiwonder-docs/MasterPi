function initMenu() {
  const menuIli = document.querySelectorAll('.toctree-l2');
  const alreadyItems = document.querySelector('.toctree-l2.current');

  if (alreadyItems) {
    alreadyItems.classList.toggle('current');
    alreadyItems.classList.add('h-current');
  }

  // 事件委托绑定到父级
  document.addEventListener('click', function(e) {
    const target = e.target.closest('.toctree-l2');
    if (target) {
      target.classList.toggle('h-current');
      console.log(`元素类名已切换: ${target.className}`);
    }
  });
}

// 根据场景选择执行时机
if (document.readyState === 'complete') {
  initMenu();
} else {
  window.addEventListener('load', initMenu);
}
