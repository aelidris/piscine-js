function interpolation(obj) {
    let stopTime = obj.duration / obj.step;
    let x = obj.start;
    let y = stopTime;
    let steps = 0; 

    let timerId = setInterval(() => {
        if (steps >= obj.step) {
            clearInterval(timerId); 
            return;
        }
        obj.callback([x, y]);
        x = x + ((obj.end - obj.start) / obj.step); 
        y += stopTime; 
        steps++;
    }, stopTime);

}
