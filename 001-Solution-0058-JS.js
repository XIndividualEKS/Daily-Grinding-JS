/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
        var n= s.length;
        var length=0;
        var i=n-1;
        while(i >= 0 && s[i] === ' '){
            i-=1;
        }
        while (i >=0 && s[i] !== ' ') {
            length +=1;
            i-=1;
        }
        return length;
    }
console.log(lengthOfLastWord("Word"));