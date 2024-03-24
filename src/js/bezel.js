class Bezel {
  constructor(container) {
    this.container = container;

    this.container.addEventListener('animationend', () => {
      this.container.classList.remove('wplayer-bezel-transition');
    });
  }

  switch(icon) {
    this.container.innerHTML = icon;
    this.container.classList.add('wplayer-bezel-transition');
  }
}

export default Bezel;
