export const wait = async (delay: number) => new Promise((resolve, _) => {
    setTimeout(resolve, delay);
})

export const randomItemInList = <T>(list: Array<T>, exclude?: T) => {
    if (exclude != undefined) list.splice(list.indexOf(exclude), 1)
    return list[Math.floor(Math.random()*list.length)];
}

export const minmax = (value: number, min: number, max: number) => {
    return Math.max(min, Math.min(value, max));
}

export const randint = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

