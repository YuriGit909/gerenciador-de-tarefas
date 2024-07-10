const activity = document.querySelector('input[name="activity"]')
const date = document.querySelector('input[name="date"]')
const time = document.querySelector('input[name="time"]')
const button = document.querySelector('input[type="button"]')

button.addEventListener('click', () => {
    let activityList = document.querySelector('section#activityList')
    let activityData = activity.value
    let dateData = date.value
    let timeData = time.value

    activityList.innerHTML = `${activity}, ${date}, ${time}`
})

/*
idTime
idDate
idActivity
idLocate
*/