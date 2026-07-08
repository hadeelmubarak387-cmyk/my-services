@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;900&display=swap');

body {
    font-family: 'Tajawal', sans-serif;
}

/* هيدر ناعم وثابت */
.main-header {
    background-color: rgba(255, 255, 255, 0.96);
    backdrop-filter: blur(8px);
}

/* هيرو كحلي مميز */
.hero-section {
    background: linear-gradient(180deg, #1e3a8a 0%, #0f172a 100%);
}

/* كروت الخدمات - تأثيير حركي ثلاثي الأبعاد خفيف عند تمرير الماوس */
.custom-card {
    box-shadow: 0 4px 18px -2px rgba(0, 0, 0, 0.04);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    text-decoration: none;
}

.custom-card:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 16px 32px -4px rgba(30, 58, 138, 0.1);
    border-color: #3b82f6;
}

/* حركة السهم الصغير داخل الكرت عند مرور الماوس */
.custom-card:hover .fa-arrow-left {
    transform: translateX(-6px);
    color: #1e3a8a;
}

/* حركة ذبذبة لطيفة لأيقونات كروت المزايا عند مرور الماوس فوق الكرت */
.feature-card {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.02);
    transition: all 0.3s ease;
}
.feature-card:hover {
    transform: translateY(-4px);
    background-color: #fafafa;
}
.feature-card:hover .icon-bounce {
    animation: bounceEffect 0.5s ease infinite alternate;
}

@keyframes bounceEffect {
    from { transform: translateY(0); }
    to { transform: translateY(-5px); }
}

/* خط تزيين العناوين الرئيسي */
.section-title {
    position: relative;
    display: inline-block;
}
.section-title::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    background: #1e3a8a;
    border-radius: 2px;
}

/* أنيميشن نبض ذكي لزر الواتساب العائم يلفت الانتباه */
.pulse-animation {
    animation: shadowPulse 2s infinite;
}
@keyframes shadowPulse {
    0% {
        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6);
    }
    70% {
        box-shadow: 0 0 0 15px rgba(16, 185, 129, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
    }
}
