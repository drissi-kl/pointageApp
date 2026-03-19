import toMiSecondes from "./toMiSecondes";

const calculateDuration = (t, user=null) => {

    let arrivalTime = t.arrivalTime ? new Date(t.arrivalTime) : null;
    let beforeBreak = t.beforeBreak ? new Date(t.beforeBreak) : null;
    let afterBreak = t.afterBreak ? new Date(t.afterBreak) : null;
    let departureTime = t.departureTime ? new Date(t.departureTime) : null;
    let currentTime = new Date();

    let s = 0;

    if (departureTime) {
        s = (departureTime - afterBreak) + (beforeBreak - arrivalTime);

    } else if (afterBreak) {
        s = (currentTime - afterBreak) + (beforeBreak - arrivalTime);

    } else if (beforeBreak) {
        s = beforeBreak - arrivalTime;

    } else if (arrivalTime) {
        s = currentTime - arrivalTime;

        if(s > toMiSecondes(user.employee.post.dailyHours)){
            s = toMiSecondes(user.employee.post.dailyHours);
        }

    } else if( t.sick || t.holiday) {
        s = toMiSecondes(user.employee.post.dailyHours);
    }

    return s;
}

export default calculateDuration;

