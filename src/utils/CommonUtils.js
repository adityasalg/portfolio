export const getYearFromDate = (fromDate) => {
    const today = new Date()
    return Math.floor(( today.getTime() - new Date(fromDate).getTime()) / 3.15576e+10);
}
