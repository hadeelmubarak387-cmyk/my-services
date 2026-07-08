document.addEventListener('DOMContentLoaded', function() {
    
    // 1. تشغيل مكتبة الحركات AOS وتحديد الإعدادات الافتراضية
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,     // سرعة الحركة بالملي ثانية
            once: true,        // تتحرك العناصر مرة واحدة فقط عند النزول ولا تتكرر لإعطاء مظهر مريح
            offset: 100        // تبدأ الحركة قبل ظهور العنصر بـ 100 بكسل
        });
    }

    const sideMenu = document.getElementById('sideMenu');
    const menuBtn = document.getElementById('menuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const menuLinks = document.querySelectorAll('.menu-link');

    // 2. فتح القائمة الجانبية عند الضغط على زر الـ 3 خطوط
    if (menuBtn) {
        menuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            sideMenu.classList.remove('hidden');
        });
    }

    // 3. إغلاق القائمة الجانبية
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            sideMenu.classList.add('hidden');
        });
    }

    // 4. إغلاق القائمة تلقائياً عند الضغط على أي قسم للانتقال له
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            sideMenu.classList.add('hidden');
        });
    });
});
