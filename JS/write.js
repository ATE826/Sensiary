const buttons = document.querySelectorAll('.color');
    const modal = document.getElementById('modal');
    const divname = document.getElementById('emotion-name');

    
buttons.forEach(button => {
    button.addEventListener('click', () => {
    const emotionName = button.getAttribute('data-emotion');
    const emotionColor = button.getAttribute('data-color');

    divname.textContent = `${emotionName}`;
    divname.style.color = "#1F264A";
    divname.style.backgroundColor = emotionColor;
    });
});
