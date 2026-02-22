const timeFormat = (t) => {
    if(/[0-9]{2}:[0-9]{2}:[0-9]{2}/.test(t)){
        let tm = t.match(/[0-9]{2}:[0-9]{2}:[0-9]{2}/g);
        if(tm.length > 0){
            tm = tm[0];
        }
        const hm = tm?.split(':')?.slice(0,2)?.join(':')
        return hm;
    }else{
        return false;
    }
}

export default timeFormat;
