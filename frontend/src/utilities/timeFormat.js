const timeFormat = (t) => {
    const hm = t.split(':').slice(0,2).join(':')
    return hm;

}

export default timeFormat;

