document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');

    // Function to toggle the theme
    const toggleTheme = () => {
        document.body.classList.toggle('dark-theme');
        const newTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : '';
        localStorage.setItem('theme', newTheme);
        updateButtonText(newTheme);
    };

    // Function to update the button text based on the current theme
    const updateButtonText = (theme) => {
        themeToggleBtn.textContent = theme === 'dark-theme' ? 'Toggle to Light Theme' : 'Toggle to Dark Theme';
    };

    // Check if the user has a theme preference stored in local storage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        updateButtonText(currentTheme);
    } else {
        // Default to light theme
        updateButtonText('');
    }

    // Add event listener to the theme toggle button
    themeToggleBtn.addEventListener('click', toggleTheme);
});