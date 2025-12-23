function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

// do line animation based on mouse scroll using Lottie
class LottieInteractivityScroll extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('Custom element is loaded!');
    const animationUrl = this.getAttribute('animation-url');
    const visibility = JSON.parse(this.getAttribute('visibility'));
    const frames = JSON.parse(this.getAttribute('frames'));
    const tagName = this.getAttribute('tag-name');

    const lottiePlayer = document.createElement('lottie-player');
    lottiePlayer.src = animationUrl;
    lottiePlayer.autoplay = false;
    lottiePlayer.loop = true;
    lottiePlayer.id = `lottie-${tagName}`;
    this.appendChild(lottiePlayer);

    lottiePlayer.addEventListener('ready', () => {
      LottieInteractivity.create({
        player: `#${lottiePlayer.id}`,
        mode: 'scroll',
        actions: [{
          visibility,
          type: 'seek',
          frames,
        }],
      });
    });
    
    const debouncedScroll = debounce(() => {
      // Your scroll event logic here
    }, 50); // Adjust the wait time as needed
  
    window.addEventListener('scroll', debouncedScroll);
  }
}

customElements.define('lottie-interactivity-scroll', LottieInteractivityScroll);