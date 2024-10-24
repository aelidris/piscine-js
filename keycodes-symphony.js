export function compose() {
    const body = document.querySelector('body');
    document.addEventListener('keydown', (event) => {
      const key = event.key;
      if (key === 'Backspace') {
        const lastNote = document.querySelector('.note:last-child');
        if (lastNote) {
          lastNote.remove();
        }
      } else if (key === 'Escape') {
        document.querySelectorAll('.note').forEach(note => note.remove());
      } else if (key.match(/[a-z]/)) {  
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note';
        noteDiv.textContent = key; 
        const hue = key.charCodeAt(0) * 10 % 360;
        noteDiv.style.backgroundColor = `hsl(${hue}, 70%, 50%)`;
        body.appendChild(noteDiv);
      }
    });
  }
  