"use strict";
const typeInterference = (variable) => {
    if (typeof variable === "string") {
        variable.toUpperCase();
    }
    else if (typeof variable === "number") {
        variable.toFixed(3);
    }
    else {
        console.log("You cannot give different typeof argument");
    }
};
typeInterference(1234);
