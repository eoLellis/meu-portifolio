document.addEventListener('DOMContentLoaded', () => {
    const words = [
        'Desenvolvedor Web',
        'UI/UX Designer ',
        'Engenheiro de Software',
        'Dev Front-End',
        'Arquiteto de software',
        'Modelador de dados SQL',
        'Amante de PHP💕',
        
    ];

    let wordIndex = 0;
    let charIndex = 0;
    const span = document.querySelector('.typing-digitando span');
    const typingSpeed = 70; // Velocidade de digitação
    const erasingSpeed = 50; // Velocidade de apagamento
    const delayBetweenWords = 1500; // Tempo de espera entre as palavras

    function type() {
        if (charIndex < words[wordIndex].length) {
            span.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenWords);
        }
    }

    function erase() {
        if (charIndex > 0) {
            span.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingSpeed);
        }
    }

    setTimeout(type, typingSpeed); // Inicia a animação de digitação
});
