import CountdownTimer from './timer'

function initTimer(selector, targetDate) {
    const myTimer = new CountdownTimer({ selector, targetDate})
    myTimer.start()
}

export default initTimer