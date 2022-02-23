const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

const interval = {
  intervalId: null,
  isActive: false,

  startChangeColor() {
    if (this.isActive) {
      return;
    }
    this.intervalId = setInterval(getRandomHexColor, 1000);
    this.isActive = true;

    function getRandomHexColor() {
      return (document.body.style.backgroundColor = `#${Math.floor(
        Math.random() * 16777215,
      ).toString(16)}`);
    }
  },

  stopChangeColor() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

startBtn.addEventListener('click', () => {
  interval.startChangeColor();
});
stopBtn.addEventListener('click', () => {
  interval.stopChangeColor();
});
