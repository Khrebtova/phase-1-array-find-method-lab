function superbowlWin(array){
    let winYear = array.find(item => item.result === "W");
    if (winYear ===  undefined){
        return undefined;
    }
    return winYear.year;
}
