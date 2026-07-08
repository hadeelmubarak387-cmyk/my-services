document.addEventListener('DOMContentLoaded', function() {
    const sideMenu = document.getElementById('sideMenu');
    const menuBtn = document.getElementById('menuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const menuLinks = document.querySelectorAll('.menu-link');

    // 1. فتح القائمة الجانبية (الثلاث خطوط) عند الضغط عليها
    if (menuBtn) {
        menuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            sideMenu.classList.remove('hidden');
        });
    }

    // 2. إغلاق القائمة الجانبية بالضغط على زر X
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            sideMenu.classList.add('hidden');
        });
    }

    // 3. إغلاق القائمة عند اختيار أي قسم للانتقال السريع له
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            sideMenu.classList.add('hidden');
        });
    });
});
