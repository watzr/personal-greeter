/**
 * Project: Peronal Greeter
 * Author : Wathsala Bandara
 * Date   : 03/20/2022
 */
 import React from "react";

function LeftEye(y) {
    return (
        <circle cx="120" cy="150" r="25" fill="#000" stroke="#000" strokeWidth="1" />
     );
}

const RightEye = (y) => {
    return(
        <circle cx="280" cy="150" r="25" fill="#000" stroke="#000" strokeWidth="1" />
    );
}

const getNumberOfDays = (date1, date2) => {
    return Math.ceil((date1 - date2) / (1000 * 60 * 60 * 24));
}

const Expression = () => {
    const startDate = new Date('12/25/2021').getTime();
    const endDate = new Date('4/25/2022').getTime();
    const middleDate = new Date((startDate + endDate) / 2);
    const currentDate = new Date();
    const height = getNumberOfDays(currentDate, middleDate);  // half of the number of days
    // For testing
    //const height = getNumberOfDays(new Date('4/25/22'), middleDate);
    const y1 = 270, y2 = y1 + height;

    const x1 = 130, x4 = 280;
    const width = height === 0 ? Math.abs((x4 - x1)/2) : Math.abs((x4 - x1)/(2 * height));
    const roundedWidth = Math.round(width * 10000)/10000;
    const x2 = x1 + roundedWidth;
    const x3 = x4 - roundedWidth;

    console.log(`x1: ${x1} y1: ${y1}, x2: ${x2}, x3: ${x3}, x4: ${x4}, y2: ${y2}`);
    return(
        <path d={`M ${x1} ${y1} C ${x2} ${y2} ${x3} ${y2} ${x4} ${y1}`} stroke="red" strokeWidth="5" fill="none" />  
    );
}

const Face = () => {
    return(
        <svg cx="0" cy="0" height="400" width="400">
            <circle cx="200" cy="200" r="200" fill="#FF0" stroke="grey" strokeWidth="1" />
            <LeftEye />
            <RightEye />
            <Expression />

            Sorry, your browser does not support inline SVG.       
        </svg>
    );
}

const Mood = () => {

    return(
        <Face />
    );
};

export default Mood;