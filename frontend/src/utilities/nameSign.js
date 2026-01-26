const nameSign = (name) => {
    const partsName = name.split(' ');
    const lastname = partsName[0];
    const fistname = partsName[1];
    return lastname[0].toUpperCase()+fistname[0].toUpperCase();
}

export default nameSign;

