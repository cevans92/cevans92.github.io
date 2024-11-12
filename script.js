document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');

    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        themeToggleBtn.textContent = currentTheme === 'dark-theme' ? 'Toggle to Light Theme' : 'Toggle to Dark Theme';
    } else {

        themeToggleBtn.textContent = 'Toggle to Dark Theme';
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const newTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : '';
        localStorage.setItem('theme', newTheme);
        themeToggleBtn.textContent = newTheme === 'dark-theme' ? 'Toggle to Light Theme' : 'Toggle to Dark Theme';
    });
});