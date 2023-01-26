//slow down loop
export const slowDown = (time) => {
    return new Promise(resolve=>setTimeout(resolve, time))
}