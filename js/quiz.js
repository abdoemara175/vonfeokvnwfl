/* ==========================================================================
   PIXEL PLATFORM - CHALLENGING QUIZ & LMS ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const quizQuestions = [
    {
      id: 1,
      questionAR: '1. ما هي النسبة الأدنى لتباين الألوان (Color Contrast Ratio) المعترف بها في WCAG 2.2 للصوص العادية لضمان الوصولية للمستويات AA؟',
      questionEN: '1. What is the minimum Color Contrast Ratio required by WCAG 2.2 AA for normal text accessibility?',
      optionsAR: ['3.0 : 1', '4.5 : 1', '7.0 : 1', '2.5 : 1'],
      optionsEN: ['3.0 : 1', '4.5 : 1', '7.0 : 1', '2.5 : 1'],
      correctIndex: 1
    },
    {
      id: 2,
      questionAR: '2. عند تصميم زر تفاعلي (Touch Target) لشاشات الهواتف المحمولة، ما هو الحد الأدنى المقبول لمنطقة اللمس حسب إرشادات Apple iOS و Android Material Design؟',
      questionEN: '2. When designing interactive touch targets for mobile screens, what is the minimum recommended size according to Apple iOS and Android Material guidelines?',
      optionsAR: ['24px x 24px', '32px x 32px', '44px - 48px كحد أدنى', '60px x 60px'],
      optionsEN: ['24px x 24px', '32px x 32px', '44px - 48px minimum', '60px x 60px'],
      correctIndex: 2
    },
    {
      id: 3,
      questionAR: '3. ما هو الفرق بين F-Shape Pattern و Z-Shape Pattern في مسح الصفحة (Page Scanning Behavioral Patterns)؟',
      questionEN: '3. What is the difference between F-Shape and Z-Shape page scanning visual patterns?',
      optionsAR: [
        'F-Shape يُستخدم للمحتوى النصي المكثف بينما Z-Shape للمخططات البصرية والـ Landing Pages',
        'F-Shape يمثل التفاعل على الهاتف و Z-Shape للديسكتوب فقط',
        'لا يوجد فرق بينهما',
        'Z-Shape مخصص للمقالات الطويلة فقط'
      ],
      optionsEN: [
        'F-Shape is used for text-dense content while Z-Shape suits visual landing pages',
        'F-Shape is for mobile and Z-Shape for desktop only',
        'There is no difference between them',
        'Z-Shape is reserved for long articles only'
      ],
      correctIndex: 0
    },
    {
      id: 4,
      questionAR: '4. ما المقصود بـ Micro-interaction Feedback في تصميم الواجهات؟',
      questionEN: '4. What does Micro-interaction Feedback represent in UI design?',
      optionsAR: [
        'الاستجابة البصرية أو الحركية الفورية الناتجة عن إتمام إجراء معين كضغط زر أو تحميل بيانات',
        'تغيير تصميم الصفحة بالكامل عند اختيار ثيم جديد',
        'كتابة كود CSS معقد بدون مكتبات خارجية',
        'إرسال بريد إلكتروني تلقائي للمستخدم'
      ],
      optionsEN: [
        'Immediate visual/motion response triggered by a user action like clicking or loading',
        'Changing the full page layout on theme toggle',
        'Writing complex CSS without libraries',
        'Sending an automated email to the user'
      ],
      correctIndex: 0
    },
    {
      id: 5,
      questionAR: '5. في تسلسل الهرم البصري (Visual Hierarchy)، أي من العناصر التالية له التأثير الأكبر على جلب انتباه العين أولاً؟',
      questionEN: '5. In Visual Hierarchy, which element has the strongest impact on drawing immediate visual attention?',
      optionsAR: [
        'حجم الخط الكبير والتباين العالي (Size & High Contrast)',
        'استخدام إطار رفيع رمادي',
        'وضع العنصر في أسفل الصفحة',
        'استخدام خط مائل (Italic)'
      ],
      optionsEN: [
        'Large font size combined with high contrast',
        'Using a thin gray border',
        'Placing the element at the bottom footer',
        'Using italic text style'
      ],
      correctIndex: 0
    }
  ];

  const questionsContainer = document.getElementById('quiz-questions-container');
  const quizForm = document.getElementById('quiz-form');
  const resultBox = document.getElementById('quiz-result-box');

  if (!questionsContainer || !quizForm) return;

  function renderQuestions() {
    const isAR = window.i18n.currentLang === 'ar';
    questionsContainer.innerHTML = quizQuestions.map((q, qIndex) => `
      <div class="glass-card" style="margin-bottom: 1.5rem; padding: 1.5rem;">
        <h3 style="font-size: 1.05rem; margin-bottom: 1rem; color: var(--text-main);">
          ${isAR ? q.questionAR : q.questionEN}
        </h3>
        <div class="quiz-options">
          ${(isAR ? q.optionsAR : q.optionsEN).map((opt, oIndex) => `
            <label class="quiz-option">
              <input type="radio" name="q_${q.id}" value="${oIndex}" required>
              <span>${opt}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let scoreCount = 0;

    quizQuestions.forEach(q => {
      const selected = document.querySelector(`input[name="q_${q.id}"]:checked`);
      if (selected && parseInt(selected.value) === q.correctIndex) {
        scoreCount++;
      }
    });

    const percentage = Math.round((scoreCount / quizQuestions.length) * 100);
    const passed = percentage >= 80;

    quizForm.style.display = 'none';
    resultBox.style.display = 'block';

    const resultIcon = document.getElementById('result-icon');
    const resultTitle = document.getElementById('result-title');
    const resultScore = document.getElementById('result-score');
    const resultDesc = document.getElementById('result-desc');
    const resultActions = document.getElementById('result-actions');

    resultScore.textContent = `${percentage}%`;

    if (passed) {
      resultBox.style.background = 'rgba(16, 185, 129, 0.15)';
      resultBox.style.border = '1px solid #10b981';
      resultIcon.className = 'fa-solid fa-circle-check';
      resultIcon.style.color = '#10b981';
      resultTitle.textContent = window.i18n.t('quizPassed') + `${percentage}%`;
      resultDesc.textContent = window.i18n.t('unlockedBadge');
      resultActions.innerHTML = `
        <a href="dashboard.html" class="btn btn-primary"><i class="fa-solid fa-chart-line"></i> الانتقال للوحة التحكم والأوسمة</a>
      `;

      // Update current user score in AuthManager
      if (window.pixelAuth.currentUser) {
        window.pixelAuth.currentUser.score = Math.max(window.pixelAuth.currentUser.score, percentage);
        window.pixelAuth.currentUser.progress = 100;
        if (!window.pixelAuth.currentUser.badges.includes('Visual Master')) {
          window.pixelAuth.currentUser.badges.push('Visual Master');
        }
        window.pixelAuth.setCurrentUser(window.pixelAuth.currentUser);
      }
    } else {
      resultBox.style.background = 'rgba(239, 68, 68, 0.15)';
      resultBox.style.border = '1px solid #ef4444';
      resultIcon.className = 'fa-solid fa-circle-xmark';
      resultIcon.style.color = '#ef4444';
      resultTitle.textContent = 'لم تتجاوز الاختبار (دون 80%)';
      resultDesc.textContent = window.i18n.t('quizFailed');
      resultActions.innerHTML = `
        <button class="btn btn-outline" onclick="location.reload()"><i class="fa-solid fa-rotate-right"></i> إعادة المحاولة</button>
      `;
    }
  });

  renderQuestions();
});
