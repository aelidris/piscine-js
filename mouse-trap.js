let lastCircle = null;
const circles = [];

export function createCircle(event) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    
    const circleSize = 50; 

    circle.style.left = `${event.clientX - circleSize / 2}px`;
    circle.style.top = `${event.clientY - circleSize / 2}px`;
    circle.style.width = `${circleSize}px`;
    circle.style.height = `${circleSize}px`;

    const box = document.querySelector('.box');
    const boxRect = box.getBoundingClientRect();
    
    if (event.clientX >= boxRect.left && 
        event.clientX <= boxRect.right && 
        event.clientY >= boxRect.top && 
        event.clientY <= boxRect.bottom) {
        circle.style.background = 'var(--purple)';
    } else {
        circle.style.background = 'white';
    }
    
    document.body.appendChild(circle);
    lastCircle = circle;
    circles.push(circle);
}

export function moveCircle(event) {
    if (lastCircle) {
        const box = document.querySelector('.box');
        const boxRect = box.getBoundingClientRect();
        const circleRect = lastCircle.getBoundingClientRect();

        const circleSize = circleRect.width;

        let newX = event.clientX - circleSize / 2;
        let newY = event.clientY - circleSize / 2;

        if (event.clientX >= boxRect.left && 
            event.clientX <= boxRect.right && 
            event.clientY >= boxRect.top && 
            event.clientY <= boxRect.bottom) {
            
            lastCircle.style.background = 'var(--purple)';

            newX = Math.max(boxRect.left + 1, Math.min(newX, boxRect.right - circleSize - 1));
            newY = Math.max(boxRect.top + 1, Math.min(newY, boxRect.bottom - circleSize - 1));
        } else if (lastCircle.style.background === 'var(--purple)') {
            newX = Math.max(boxRect.left + 1, Math.min(newX, boxRect.right - circleSize - 1));
            newY = Math.max(boxRect.top + 1, Math.min(newY, boxRect.bottom - circleSize - 1));
        } else {
            lastCircle.style.background = 'white';
        }

        lastCircle.style.left = `${newX}px`;
        lastCircle.style.top = `${newY}px`;
    }
}

export function setBox() {
    const box = document.createElement('div');
    box.className = 'box';
    document.body.appendChild(box);
    
    const boxWidth = window.innerWidth * 0.25;  
    const boxHeight = window.innerHeight * 0.25;  

    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxHeight}px`;

    box.style.position = 'absolute';
    box.style.left = `${(window.innerWidth - boxWidth) / 2}px`;
    box.style.top = `${(window.innerHeight - boxHeight) / 2}px`;
}

document.addEventListener('click', createCircle);
document.addEventListener('mousemove', moveCircle);

setBox();
