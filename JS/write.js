const buttons = document.querySelectorAll('.color');
    const modal = document.getElementById('modal');
    const title = document.getElementById('emotion-title');
    const divname = document.getElementById('emotion-name');

    // Добавляем событие на каждую кнопку
buttons.forEach(button => {
    button.addEventListener('click', () => {
    const emotionName = button.getAttribute('data-emotion');
    const emotionColor = button.getAttribute('data-color');

    divname.textContent = `${emotionName}`;
    divname.style.backgroundColor = emotionColor;
    });
});
