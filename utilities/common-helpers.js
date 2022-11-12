export const stickyHeader = () => {
    let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const header = document.getElementById("header-sticky");
    if (header !== null) {
        if (number >= 300) {
            header.classList.add("header--sticky");
        } else {
            header.classList.remove("header--sticky");
        }
    }
};

export const stickyHeaderModile = () => {
    let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const header = document.getElementById("header-sticky-mobile");
    if (header !== null) {
        if (number >= 300) {
            header.classList.add("header--sticky");
        } else {
            header.classList.remove("header--sticky");
        }
    }
};

export const generateTempArray = (maxItems) => {
    let result = [];

    for (let i = 0; i < maxItems; i++) {
        result.push(i);
    }
    return result;
};

export const makeSlug = (str) => {
    str = str.replace(/[\])}[{(]/g, "");
    str = str.replace(/,/g, "-");
    str = str.replace(/[()\ \s-]+/g, " ");
    str = str.replace(/\s+/g, "-");
    return str;
};

export const makeRefID = (length) => {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
