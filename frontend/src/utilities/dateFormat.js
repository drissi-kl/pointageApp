const dateFormat = (d) => {
    const s = new Date(d);
    return `${String(s.getDate()).padStart(2, "0")}`
}

export default dateFormat;
