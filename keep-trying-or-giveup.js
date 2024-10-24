function retry(count, callback) {
    let attempts = 0;
    return function(...args) {
        const attempt = () => {
            attempts++;
            return callback(...args)
                .then(result => result) 
                .catch(error => {
                    if (attempts <= count+1) {
                        return attempt();
                    } else {
                        throw new Error(`${error.message}`);
                    }
                });
        };
        return attempt();
    };
}

function timeout(delay, callback) {
    return function(...args) {
        const callbackPromise = new Promise((resolve, reject) => {
            callback(...args)
                .then(resolve)
                .catch(reject);
        });

        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('timeout')), delay); 
        });

        return Promise.race([callbackPromise, timeoutPromise])
            .catch(() => {
                throw new Error('timeout')
            }); 
    };
}


