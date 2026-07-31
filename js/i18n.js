/* ==========================================================================
   PIXEL PLATFORM - INTERNATIONALIZATION (i18n) DICTIONARY & CONTROLLER
   100% Arabic / 100% English switching with zero leftover untranslated text.
   ========================================================================== */

const translations = {
  ar: {
    // Navigation
    navHome: "الرئيسية",
    navCourses: "المناهج والمسارات",
    navSliders: "شروحات تفاعلية",
    navCommunity: "المجتمع",
    navQuiz: "الاختبار التفاعلي",
    navDashboard: "لوحة التحكم",
    navLogin: "تسجيل الدخول",
    navSignup: "إنشاء حساب",
    navLogout: "تسجيل الخروج",

    // Hero & Header
    heroTitle: "منصة PIXEL التعليمية والمجتمعية لـ UI/UX",
    heroSubtitle: "رحلة تفاعلية متكاملة لتعلم تصميم الواجهات الرقمية وتجربة المستخدم من الصفر إلى الاحتراف مع مجتمع مبدع وخبراء متخصصين.",
    startLearning: "ابدأ التعلم الآن",
    joinCamp: "الانضمام إلى Pixel Camp",

    // Roles & Staff
    roleFounder: "مؤسس المنصة (Founder)",
    roleAdmin: "قائد / مدير (Admin / Lead)",
    roleInstructor: "محاضر UI/UX (Instructor)",
    roleMedia: "فريق الميديا (Media)",
    roleHR: "فريق الموارد البشرية (HR)",
    roleStudent: "طالب (Student)",

    // Sliders & Lessons
    sliderTitle: "مقارنات وتطبيقات تصميم الواجهات التفاعلية",
    sliderSubtitle: "استخدم أسهم الكيبورد (Right/Left) أو الأزرار للتنقل بين الأخطاء الشائعة والممارسات الصحيحة.",
    slideMistake: "خطأ شائع في التصميم",
    slideBestPractice: "الممارسة الصحيحة والاحترافية",
    prevSlide: "السابق",
    nextSlide: "التالي",

    // Quizzes & LMS
    quizTitle: "اختبار قياس المستوى والتحدي البرمجي",
    quizSubtitle: "اختبار مكثف يتطلب دقة 80% على الأقل لفتح الموضوع التالي والحصول على وسام الإنجاز.",
    passThresholdInfo: "نسبة النجاح المطلوبة: 80% | محاولات محدودة لضمان الجدية",
    submitQuiz: "تسليم الإجابات وتقييم النتيجة",
    quizPassed: "مبارك! لقد اجتزت الاختبار بنجاح بنسبة ",
    quizFailed: "للأسف لم تتجاوز نسبة 80%. يرجى مراجعة الدرس وإعادة المحاولة.",
    unlockedBadge: "وسام مكتسب: خبير قواعد UI/UX البصرية",

    // Dashboard & Leaderboard
    dashboardTitle: "لوحة تحكم الطالب والتقدم الدراسي",
    activeCamp: "المعسكر الحالي: Pixel Camp - الدفعة الأولى",
    progressOverall: "نسبة إنجاز المسار التعليمي",
    unlockedTopics: "المواضيع المكتملة",
    topLeaderboardTitle: "أفضل 3 طلاب في الدفعة (Top 3 in Camp)",
    adminPanelTitle: "لوحة إدارة الرتب وتوزيع الطلاب (Admin & Staff Panel)",
    changeRoleLabel: "تغيير رتبة المستخدم:",
    saveChanges: "حفظ التغييرات",

    // General & Theme
    themeToggleDark: "الوضع الداكن",
    themeToggleLight: "الوضع المضيء",
    langToggle: "English",
    footerText: "جميع الحقوق محفوظة منصة Pixel التعليمية 2026."
  },

  en: {
    // Navigation
    navHome: "Home",
    navCourses: "Curriculum & Tracks",
    navSliders: "Interactive Sliders",
    navCommunity: "Community",
    navQuiz: "Interactive Quiz",
    navDashboard: "Dashboard",
    navLogin: "Sign In",
    navSignup: "Sign Up",
    navLogout: "Sign Out",

    // Hero & Header
    heroTitle: "PIXEL UI/UX Learning & Community Platform",
    heroSubtitle: "An interactive journey to master digital interface and user experience design from scratch to expertise alongside an inspiring community.",
    startLearning: "Start Learning Now",
    joinCamp: "Join Pixel Camp",

    // Roles & Staff
    roleFounder: "Founder & Super Admin",
    roleAdmin: "Lead / Admin",
    roleInstructor: "UI/UX Instructor",
    roleMedia: "Media Team",
    roleHR: "HR Team",
    roleStudent: "Student",

    // Sliders & Lessons
    sliderTitle: "Interactive UI Design Comparison Sliders",
    sliderSubtitle: "Use keyboard arrow keys (Left/Right) or buttons to navigate common mistakes and best practices.",
    slideMistake: "Common Design Mistake",
    slideBestPractice: "Best Professional Practice",
    prevSlide: "Previous",
    nextSlide: "Next",

    // Quizzes & LMS
    quizTitle: "Interactive Level Assessment & Challenge Quiz",
    quizSubtitle: "An intensive challenge requiring at least 80% score to unlock the next module and earn an achievement badge.",
    passThresholdInfo: "Required Pass Mark: 80% | Strict evaluation to ensure mastery",
    submitQuiz: "Submit Answers & Evaluate Result",
    quizPassed: "Congratulations! You passed the quiz with a score of ",
    quizFailed: "Score below 80%. Please review the topic and try again.",
    unlockedBadge: "Achievement Unlocked: UI/UX Visual Mastery Badge",

    // Dashboard & Leaderboard
    dashboardTitle: "Student Dashboard & Academic Progress",
    activeCamp: "Current Enrolled Track: Pixel Camp - Round 1",
    progressOverall: "Overall Curriculum Completion",
    unlockedTopics: "Completed Topics",
    topLeaderboardTitle: "Top 3 Students in Camp (Round 1)",
    adminPanelTitle: "Role Management & Staff Panel (Admin & Founder)",
    changeRoleLabel: "Modify User Role:",
    saveChanges: "Save Changes",

    // General & Theme
    themeToggleDark: "Dark Mode",
    themeToggleLight: "Light Mode",
    langToggle: "العربية",
    footerText: "All rights reserved. Pixel Educational Platform 2026."
  }
};

class i18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('pixel_lang') || 'ar';
    this.currentTheme = localStorage.getItem('pixel_theme') || 'dark';
    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.applyLang(this.currentLang);
  }

  setLang(lang) {
    this.currentLang = lang;
    localStorage.setItem('pixel_lang', lang);
    this.applyLang(lang);
  }

  toggleLang() {
    const newLang = this.currentLang === 'ar' ? 'en' : 'ar';
    this.setLang(newLang);
  }

  applyLang(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        if (el.tagName === 'INPUT' && el.type === 'placeholder') {
          el.placeholder = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    const langToggleBtns = document.querySelectorAll('.lang-toggle-btn');
    langToggleBtns.forEach(btn => {
      btn.textContent = translations[lang].langToggle;
    });
  }

  setTheme(theme) {
    this.currentTheme = theme;
    localStorage.setItem('pixel_theme', theme);
    this.applyTheme(theme);
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  applyTheme(theme) {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }

  t(key) {
    return (translations[this.currentLang] && translations[this.currentLang][key]) || key;
  }
}

window.i18n = new i18nManager();
