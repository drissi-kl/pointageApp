const duration = (x) => {
    const duration = Number(x)/1000;
    console.log('number x: ', duration);
    const hours = Math.floor(duration / 3600);
    console.log('hours', hours);
    const minutes = Math.floor((duration - (hours * 3600)) / 60);
    console.log('minutes', minutes);
    return ;

}

export default duration;