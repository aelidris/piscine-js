export function generateLetters(){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const body = document.querySelector('body');
  
    const fontSizeInc = (130-11) / 120;
    for (let i=0;i<120;i++){
      const letterDiv = document.createElement('div');
      const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
      letterDiv.textContent = randomLetter;
  
      const size = 11 + Math.ceil(fontSizeInc * i);
      letterDiv.style.fontSize = `${size}px`;
  
      if (i < 120 / 3) {
        letterDiv.style.fontWeight = '300'; 
      } else if (i < (2 * 120) / 3) {
        letterDiv.style.fontWeight = '400'; 
      } else {
        letterDiv.style.fontWeight = '600'; 
      }
  
      body.appendChild(letterDiv);
    }
  
  }
