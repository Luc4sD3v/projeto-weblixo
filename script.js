/*
document.getElementById("toggle-dark-mode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
*/
// Seleciona o botão de toggle (trocar tema)
// Seleciona o botão de toggle (trocar tema)
const toggleDarkModeButton = document.getElementById('darkModeToggle');
console.log(toggleDarkModeButton); // Verifique se o botão está sendo selecionado corretamente

// Função para aplicar o modo escuro
function applyDarkMode() {
    // Seleciona os elementos onde o dark mode deve ser aplicado
    document.body.classList.add('dark-mode');
    document.querySelector('header').classList.add('dark-mode');
    const mainElement = document.querySelector('main');
    if (mainElement) mainElement.classList.add('dark-mode');
}

// Função para remover o modo escuro
function removeDarkMode() {
    // Remove as classes de dark mode
    document.body.classList.remove('dark-mode');
    document.querySelector('header').classList.remove('dark-mode');
    const mainElement = document.querySelector('main');
    if (mainElement) mainElement.classList.remove('dark-mode');
}

// Verifica no localStorage se o usuário já escolheu o modo dark
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada');
    const userPreference = localStorage.getItem('theme');
    
    // Aplica o dark mode com base na preferência do usuário armazenada
    if (userPreference === 'dark') {
        applyDarkMode();
        toggleDarkModeButton.textContent = 'Light Mode';
    } else {
        removeDarkMode();
        toggleDarkModeButton.textContent = 'Dark Mode';
    }
});

// Alterna entre os temas claro e escuro
toggleDarkModeButton.addEventListener('click', () => {
    // Verifica se o dark mode está ativo ou não
    if (document.body.classList.contains('dark-mode')) {
        removeDarkMode();
        toggleDarkModeButton.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    } else {
        applyDarkMode();
        toggleDarkModeButton.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    }
});
