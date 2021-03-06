/*
   module returns nice name for template and fields
*/
const getNiceName = (name) => {
    let niceName = name.replace(/_/g, " ");
    niceName = niceName
        .toLowerCase()
        .split(" ")
        .map((el) => el.charAt(0).toUpperCase() + el.substring(1))
        .join(" ");

    return niceName;
}

module.exports = {
    getNiceName: getNiceName
}