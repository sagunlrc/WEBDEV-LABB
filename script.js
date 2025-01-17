document.getElementById('start-timer').addEventListener('click', () => {
    const targetInput = document.getElementById('target-date');
    const targetDate = new Date(targetInput.value);
  
    if (isNaN(targetDate)) {
      alert('Please select a valid date and time.');
      return;
    }
  
    startCountdown(targetDate);
  });
  
  function startCountdown(targetDate) {
    clearInterval(window.timerInterval); // Clear any existing interval
  
    window.timerInterval = setInterval(() => {
      const now = new Date();
      const timeRemaining = targetDate - now;
  
      if (timeRemaining <= 0) {
        clearInterval(window.timerInterval);
        alert('Countdown finished!');
        updateDisplay(0, 0, 0, 0);
        return;
      }
  
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      updateDisplay(days, hours, minutes, seconds);
    }, 1000);
  }
  
  function updateDisplay(days, hours, minutes, seconds) {
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }
  