// Menunggu DOM siap sebelum menjalankan script
document.addEventListener('DOMContentLoaded', () => {

    // Inisialisasi AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({ once: true, offset: 100, duration: 800, easing: 'ease-out-cubic' });
    }

    // -- MOBILE MENU --
    const btn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-overlay');
    const links = document.querySelectorAll('.mobile-menu a');
    const menuIcon = btn?.querySelector('.menu-icon');
    const closeIcon = btn?.querySelector('.close-icon');

    // Buka menu mobile
    function open() {
        menu?.classList.remove('translate-x-full');
        overlay?.classList.remove('opacity-0', 'pointer-events-none');
        overlay?.classList.add('opacity-100', 'pointer-events-auto');
        document.body.style.overflow = 'hidden';
        menuIcon?.classList.add('hidden');
        closeIcon?.classList.remove('hidden');
    }

    // Tutup menu mobile
    function close() {
        menu?.classList.add('translate-x-full');
        overlay?.classList.remove('opacity-100', 'pointer-events-auto');
        overlay?.classList.add('opacity-0', 'pointer-events-none');
        document.body.style.overflow = '';
        menuIcon?.classList.remove('hidden');
        closeIcon?.classList.add('hidden');
    }

    // Event listeners untuk toggle menu
    btn?.addEventListener('click', () => menu?.classList.contains('translate-x-full') ? open() : close());
    overlay?.addEventListener('click', close);
    links.forEach(l => l.addEventListener('click', close));

    // -- NAVBAR SCROLL EFFECT --
    // Tambahkan class 'scrolled' ke navbar saat scroll melebihi 50px
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => navbar?.classList.toggle('scrolled', window.scrollY > 50));

    // -- SMOOTH SCROLL --
    // Animasi smooth scroll untuk semua anchor link internal
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (id === '#') return;
            const el = document.querySelector(id);
            if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        });
    });
});
