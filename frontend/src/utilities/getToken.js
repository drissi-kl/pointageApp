const getToken = () => {
    const cookies = document.cookie;
    const pat = /token=([0-9]+\|[0-9A-Za-z]+);/
    const match = cookies.match(pat);

    if(!match){
        throw new Error('token not exists');
    }

    return match[1];

}

export default getToken;
