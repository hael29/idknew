function move() {
    const button = document.getElementById('button');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    const randomX = Math.floor(Math.random() * (screenWidth - buttonWidth));
    const randomY = Math.floor(Math.random() * (screenHeight - buttonHeight));
    
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  }

  function increaseCounter() {
    const counter = document.getElementById('counter');
    let count = parseInt(counter.innerText.split(' ')[2]);
    count++;
    counter.innerText = `Times hovered: ${count}`;
  }
