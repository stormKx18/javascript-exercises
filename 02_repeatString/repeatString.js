const repeatString = function(input,times) {
    if (times<0) return 'ERROR';

    let ans = "";
    for (let i = 0; i < times; i++) {
        ans+=input;        
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
