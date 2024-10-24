export const styles = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
  ]
  
  let currentStep = 0;
  let adding = true;
  
  export function pimp() {
    const button = document.querySelector('.button');
  
    if (adding) {
      if (currentStep < styles.length) {
        button.classList.add(styles[currentStep]);
        currentStep++;
      }
  
      if (currentStep === styles.length) {
        button.classList.add('unpimp');
        adding = false;
      }
    } else {
      button.classList.remove('unpimp');
  
      if (currentStep > 0) {
        currentStep--;
        button.classList.remove(styles[currentStep]);
      }
  
      if (currentStep === 0) {
        adding = true;
      } else {
        button.classList.add('unpimp');
      }
    }
  }
  