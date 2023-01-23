export const bestAvaliation = (a, b) => {
    return parseFloat(a.rating.rate) - parseFloat(b.rating.rate);
}

export const mostAvaliation = (a, b) => {
    return parseFloat(a.rating.count) - parseFloat(b.rating.count);
}

export const growingPrice = (a, b) => {
    return parseFloat(a.price) - parseFloat(b.price);
}

export const descendingPrice = (a, b) => {
    return parseFloat(b.price) - parseFloat(a.price);   
}