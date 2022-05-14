export const convertDate = (date: string) => {
    const dt = new Date(date)
    return `${dt.toString().substring(3, 7)} ${dt.getDay()}, ${dt.getFullYear()}`
}