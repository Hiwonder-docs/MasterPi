function initMenu() {
    const alreadyItems = document.querySelector('.toctree-l2.current');
    if (alreadyItems) {
        alreadyItems.classList.remove('current');
        alreadyItems.classList.add('h-current');
    }

    // 事件委托绑定到父级
    const menuContainer = document.querySelector('.wy-menu-vertical > .current');
    menuContainer.addEventListener('click', function(e) {
        const target = e.target.closest('.toctree-l2>a');
        if (target) {
            console.log(1);
            target.parentNode.classList.toggle('h-current');
        }
    });
}

// 根据场景选择执行时机
if (document.readyState === 'complete') {
    initMenu();
} else {
    window.addEventListener('load', initMenu);
}
