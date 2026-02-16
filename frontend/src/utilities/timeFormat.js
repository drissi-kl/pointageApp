const timeFormat = (t) => {
    if(/[0-9]{2}:[0-9]{2}:[0-9]{2}/.test(t)){
        const hm = t?.split(':')?.slice(0,2)?.join(':')
        return hm;

    }else{
        return false;
    }

}

export default timeFormat;

