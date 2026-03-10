const timeFormat = (t) => {
    const pat = /^[0-9]{2}:[0-9]{2}/g;
    if(pat.test(t)){
        let tm = t.match(pat);
        if(tm.length > 0){
            tm = tm[0];
            return tm;
        }
        return false;
    }else{
        return false;
    }
}

export default timeFormat;
