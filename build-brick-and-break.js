let currentBricks = 0;

export function build(totalBricks) {
  const body = document.querySelector('body');
  
  const intervalId = setInterval(() => {
    if (currentBricks >= totalBricks) {
      clearInterval(intervalId);
      return;
    }

    const brick = document.createElement('div');
    currentBricks++;
    brick.id = `brick-${currentBricks}`;
    brick.textContent = `Brick ${currentBricks}`;
    
    if (currentBricks % 3 === 2) {
      brick.dataset.foundation = "true";
    }

    body.appendChild(brick);
  }, 100);
}

export function repair(...brickIds) {
  brickIds.forEach(id => {
    const brick = document.getElementById(id);
    if (brick) {
      if (brick.dataset.foundation === "true") {
        brick.dataset.repaired = "in progress";
      } else {
        brick.dataset.repaired = "true";
      }
    }
  });
}

export function destroy() {
  const body = document.querySelector('body');
  const bricks = body.querySelectorAll('div[id^="brick-"]');
  
  if (bricks.length > 0) {
    const lastBrick = bricks[bricks.length - 1];
    lastBrick.remove();
  }
}
