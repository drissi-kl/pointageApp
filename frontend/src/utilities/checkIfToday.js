const checkIfToday = (t) => {
    const dateX = new Date(t);
    const today = new Date();

    console.log('dateX', dateX);
    console.log('today', today);
    

    if(dateX.getFullYear() == today.getFullYear() && dateX.getMonth() == today.getMonth() && dateX.getDate() == today.getDate()){
        return true;
    }
    return false;
    
}

export default checkIfToday;


