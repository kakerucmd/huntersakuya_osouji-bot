document.addEventListener('DOMContentLoaded', () => {
    const darkmodeToggle = document.getElementById('darkmode-toggle');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme') || 'dark';
    body.classList.add(`${currentTheme}-theme`);
    darkmodeToggle.checked = currentTheme === 'light';

    darkmodeToggle.addEventListener('change', () => {
        if (darkmodeToggle.checked) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        }
    });
});