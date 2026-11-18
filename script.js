const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

$('#themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

$$('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    $$('.filter').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    $$('.project-card').forEach((card) => card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter));
  });
});

$('#runDemo').addEventListener('click', () => {
  const state = $('#demoState');
  const result = $('#demoResult');
  state.textContent = 'running...';
  result.classList.add('running');
  result.innerHTML = '<span class="result-icon">◌</span><strong>نحوّل الفكرة...</strong><small>assembling motion / 3 steps</small>';
  setTimeout(() => {
    state.textContent = 'complete';
    result.innerHTML = '<span class="result-icon">✦</span><strong>تم التشغيل بنجاح</strong><small>الفكرة تحركت — والآن دورك</small>';
  }, 1050);
});

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: 0.12 });
$$('.reveal').forEach((element) => observer.observe(element));

