function throttle(func, wait) {
    let helper = false
    return function (...args) {
        if (!helper) {
            func.apply(this, args)
            helper = true

            setTimeout(() => {
                helper = false
            }, wait);

        }
    }
}


function opThrottle(func, wait, options = {}) {
    let { leading = false, trailing = false } = options
    let helper = false

    return function (...args) {
        if (!helper) {
            if (leading) {
                func.apply(this, args)
                }
            helper = true
            setTimeout(() => {
                if (trailing && !leading) {

                    func.apply(this, args)
                }
                helper = false
            }, wait)

        }
    }
}
