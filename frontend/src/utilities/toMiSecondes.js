const toMiSecondes = (t) => {

    const dailyHours = t.split(':');
    let s = Number(dailyHours[0])*60*60*1000;
    s += Number(dailyHours[1])*60*1000;
    s += Number(dailyHours[2])*1000;
    return s;

}

export default toMiSecondes;
