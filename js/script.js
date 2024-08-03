// Efeito OLA
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    const char = this.chars[Math.floor(Math.random() * this.chars.length)];
    return `<span class="random-char">${char}</span>`;
  }
}

const phrasesH1 = ['Bem Vindo', 'Welcome', 'Bienvenido'];

// Selecione o elemento HTML onde o efeito será aplicado
const el = document.querySelector('h1'); // Altere 'h2' para o seletor do seu elemento

// Crie uma nova instância da classe TextScramble
const textScramble = new TextScramble(el);

// Função para mudar o texto
let counter = 0;
const nextPhrase = () => {
  textScramble.setText(phrasesH1[counter]).then(() => {
    setTimeout(nextPhrase, 800);
  });
  counter = (counter + 1) % phrasesH1.length;
}

// Inicie o efeito
nextPhrase();

document.addEventListener('DOMContentLoaded', function() {
  const bubbleContainer = document.getElementById('bubbles');
  for (let i = 0; i < 10; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.style.animationName = 'rise, bubbleSize';
      bubbleContainer.appendChild(bubble);
  }
});

// ROLAGEM SUAVE
  document.querySelector('.nav-link-about').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#about-section').scrollIntoView({
      behavior: 'smooth'
    });
  });
  
  document.querySelector('.nav-link-services').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#services-section').scrollIntoView({
      behavior: 'smooth'
    });
  });
  
  document.querySelector('.nav-link-contact').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#contact-section').scrollIntoView({
      behavior: 'smooth'
    });
  });
  
  document.querySelector('.nav-link-home').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#home-section').scrollIntoView({
      behavior: 'smooth'
    });
  });

  

 

