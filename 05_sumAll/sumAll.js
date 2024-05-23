const sumAll = function(arg1,arg2) {

    if (typeof arg1 !='number' || typeof arg2!='number') return 'ERROR';

    let maxN = Math.max(arg1,arg2);
    let minN = Math.min(arg1,arg2);

    if (minN<=0) return 'ERROR';

    let ans=0;
    for (let i = minN; i <= maxN; i++) {
        ans+=i;
    }

    return ans;
};

// Do not edit below this line
module.exports = sumAll;
