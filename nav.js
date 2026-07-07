document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    if (!container) return;

    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    overlay.setAttribute('aria-hidden', 'true');

    const toggle = document.createElement('button');
    toggle.className = 'menu-toggle';
    toggle.setAttribute('aria-label', 'Toggle navigation menu');
    toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

    container.insertBefore(overlay, container.firstChild);
    document.body.appendChild(toggle);

    const closeSidebar = () => container.classList.remove('sidebar-open');

    toggle.addEventListener('click', () => {
        container.classList.toggle('sidebar-open');
    });

    overlay.addEventListener('click', closeSidebar);

    container.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) closeSidebar();
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) closeSidebar();
    });
});
