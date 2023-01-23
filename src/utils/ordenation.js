export const mostAvaliation = (a, b) => {
    return b.rating.count - a.rating.count;
}

export const growingPrice = (a, b) => {
    return a.price - b.price;
}

export const descendingPrice = (a, b) => {
    return b.price - a.price;
}