function debounce(func, wait){
    let time
    return function(...args){
        clearTimeout(time)
        time = setTimeout(() => {
            func.apply(this, args)
        }, wait)
    }
    
}


function opDebounce(func, wait, options = {}) {
    const { leading = false } = options;
    let timeout;
    let hasInvoked = false; 

    return function(...args) {
        const context = this;

        if (leading && !hasInvoked) {
            func.apply(context, args);
            hasInvoked = true;
        }

        clearTimeout(timeout);

        timeout = setTimeout(() => {
            if (!leading) {
                func.apply(context, args); 
            }
            hasInvoked = false; 
        }, wait);
    };
}




