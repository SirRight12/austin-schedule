try {
    const con = document.getElementById('sub-console')
    let time = timeControls()
    let hTime = hTimeControls()
    let disabled = false
let current = 1

function useTimeControl(controller) {
    try {
    if (disabled) return
    if (!isInsideSchool() && !disabled) {
        displayEndPrompt()
        disabled = true
    }
    if (controller == 1) {
        hTime()
    } else if (controller == 2) {
        time()
    } else {
        hTime()
    }
    } catch (err) {
        con.innerHTML = err
    }
}
//Parse Time
function PT(TimeString) {
    let [startTime,endTime] = TimeString.split("-")
    
    let [startHr,startMin] = startTime.split(":")
    let [endHr,endMin] = endTime.split(":")
    const start = new Date()
    start.setHours(startHr,startMin,0,0)
    const end = new Date()
    end.setHours(endHr,endMin,0,0)
    return [start,end]
}
const endPrompts = [
    ["Summer's here", "soak up sun", "Make memories"],
    ["Break begins", "go outside", "Enjoy the day"],
    ["School's out", "long days ahead", "Relax & explore"],
    ["Summer fun", "grab sunscreen", "Find adventure"],
    ["It's summer", "chase sun", "Collect moments"],
    ["Day ends", "hit the park", "Keep smiling"],
    ["Vibes on", "make a splash", "Laugh more"],
    ["Sunset", "make memories", "Share stories"],
    ["Warm days", "play longer", "Stay curious"],
    ["Evening", "relax & roam", "Enjoy tonight"],
    ["Break starts", "celebrate outside", "Make it count"],
    ["Catch summer", "shine today", "Bring joy"]
];
function displayEndPrompt() {
    const randomIndex = Math.floor(Math.random() * endPrompts.length);
    const [line1, line2, line3] = endPrompts[randomIndex];
    const prompter = document.getElementById('prompt');
    prompter.dataset.before = line1;
    prompter.dataset.after = line3;
    prompter.innerHTML = line2;
}

function isInsideSchool() {
    //if the time is past 11:05, then it's after school, so return false. Otherwise, return true.
    if (new Date().setHours(11,5,0,0) - new Date() < 0) {
        return false
    }
    return true
}
function timer() {
    // hTime()
    useTimeControl(current)
    // con.innerHTML = "hi "
}
timer()
setInterval(timer,0)
} catch (err) {
    console.error(err)
    con.innerHTML = err
}
