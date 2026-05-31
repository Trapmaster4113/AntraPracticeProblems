//1. Write a Javascript function that reverses a number.
function numReverse(num) {
    let str = num.toString();
    let rev = str.split('').reverse().join('');
    return parseInt(rev, 10);
}
/*console.log(numReverse(1234));*/
//2. Write a Javascript function that checks whether a passed string is a palindrome?
function isPalindrome(word) {
    let rev = word.split('').reverse().join('');
    return rev == word;
}
/*console.log(isPalindrome('racecar'));
console.log(isPalindrome('super'));*/
//3. Write a Javascript function that generates all combinations of a string.
function allCombs(word) {
    var l = [];
    for (let i = 0; i <= word.length; i++){
        for (let j = 0; j < i; j++) {
            l.push(word.substring(j,i));
        }
    }
    return l;
}
/*console.log(allCombs('dog'));
console.log(allCombs('path'));*/
//4. Write a Javascript function that returns a passed string with letters in alphabetical order.
function letterSort(word) {
    return word.split('').sort().join('');
}
/*console.log(letterSort('fantastic'));*/
//5. Write a Javascript function taht accepts a string as a parameter and converts the first letter of each word of the string in upper case.
function upperString(sentence) {
    return sentence.split(' ').map(x => x[0].toUpperCase() + x.substring(1, x.length)).join(' ');
}
/*console.log(upperString('the quick brown fox jumps over the lazy dog'));*/
//6. Write a Javascript function that accepts a string as a parameter and find the longest word within the string.
function longest(sentence) {
    let words = sentence.split(' ');
    let max = words[0];
    for (let i of words) {
        if (max.length < i.length) {
            max = i;
        }
    }
    return max;
}
//*onsole.log(longest("Web Development Tutorial"));*/
//7. Write a ajvascript function that accepts a string as a parameter and counts the number of vowels within the string.
function countVowels(sentence) {
    return sentence.split('a').length + sentence.split('e').length + sentence.split('i').length + sentence.split('o').length + sentence.split('u').length - 5;
}
/*console.log(countVowels('The quick Brown Fox'));
console.log(countVowels('Hello, World!'));*/
//8. Wrtie a javascript function that accepts a a number as a parameter and check if the number is prime or not
function isPrime(num) {
    if (num < 1) {
        return false;
    }
    if (num == 2) {
        return true;
    }
    for (let i = 2; i < num/2; i++) {
        if (num%i==0) {
            return false;
        }
    }
    return true;
}
/*console.log(isPrime(7));
console.log(isPrime(16));
console.log(isPrime(23));*/
//9. Write a javascript function which accepts an arguemtn and returns the type
function whatType(obj) { 
    return typeof obj;
}
/*console.log(whatType('hello'));
console.log(whatType(123));
console.log(whatType(1.23));*/
//10. Write a Javascript function which returns the n rows by n columns idendity matrix
function identityMatrix(n){
    let l = [];
    for (let i = 0; i < n; i++) {
        let m = new Array(n).fill(0);
        m[i] = 1;
        l.push(m);
    }
    return l;
}
/*console.log(identityMatrix(2));
console.log(identityMatrix(3));*/
//11. Write a Javascript function that takes an arary of numbers and returns the 2nd lowest and 2nd highest
function return2nd(numList) {
    let sorted = numList.sort();
    return sorted[1].toString()+ ',' + sorted[numList.length-2].toString();
}
/*console.log(return2nd([1,2,3,4,5,6]));*/
//12. Write a function which says whether a number is perfect (= to sum of positive factors)
function perfectNum(num) {
    let factors = [1];
    for (let i = 2; i<=num/2; i++){
        if (num%i==0) {
            factors.push(i);
        }
    }
    let count = 0;
    for (let i of factors) {
        count += i;
    }
    return count == num;
}
/*console.log(perfectNum(6));
console.log(perfectNum(496));
console.log(perfectNum(8128));
console.log(perfectNum(100));*/
//13. Write a function that gets all the factors of a positive integer
function factor(num) {
    let factors = [1,num];
    for (let i = 2; i<=num/2; i++){
        if (num%i==0) {
            factors.push(i);
        }
    }
    let negFactors = factors.map(x => x*-1);
    return factors.concat(negFactors);
}
/*console.log(factor(8));*/
//14. Write a function to convert an amount to coins
function coinage(num, coins) {
    let l = []
    for (let i of coins) {
        let amt = Math.floor(num/i);
        for (let j = 1; j <= amt; j++) {
            l.push(i);
        }
        num -= amt*i;
    }
    return l.join(', ');
}
//console.log(coinage(46, [25,10,5,2,1])); //Output: 25, 10, 10, 1
//15. Write a function to the compute teh value of bn wher n is the exponent and b is the base
function power(b, n) {
    return b**n;
}
/*console.log(power(4,2));*/
//16. Extracts unique characters from a string
function unique(sentence) {
    const setA = new Set(sentence.split(''));
    return Array.from(setA).join('');
}
/*console.log(unique('thequickbrownfoxjumpsoverthelazydog'));*/
//17. Make a count function
function count(sentence) {
    let d = {};
    for (let i of new Set(sentence.split(''))) {
        d[i] = sentence.split(i).length - 1;
    }
    return d;
}
/*console.log(count('thequickbrownfoxjumpsoverthelazydog'));*/
//18. make a binary search
function binarySearch(numArray, value) {
    let l = 0;
    let r = numArray.length - 1;
    while (l <= r) {
        let mid = Math.floor((l+r)/2);
        if (numArray[mid] == value) {
            return true
        }
        else if (numArray[mid] < value) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }
    return false;
}
/*console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12], 11));
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12], 13));*/
//19. returns elements of an array that are larger than an input amount
function larger(numArray, value) {
    return numArray.filter(x=>x>value);
}
/*console.log(larger([1,2,3,4,5,6,7,8,9,10,11,12],7));*/
//20. generates a random string id of inputed length
function idGen(len) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    let result = '';
    for (let i = 0; i < len; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}
/*console.log(idGen(5));*/
//21. get all possible subsets of a fixed length for combinations in an array
function powerSet(numArray, len) {
    if (len == 1) {
        return numArray.map(x=>[x]);
    }
    let result = [];
    for (let i of numArray) {
        let rest = numArray.filter(x => x!=i);
        let smaller = powerSet(rest, len-1);
        smaller.forEach(x => result.push([i, ...x]));
    }
    return result
}
/*console.log(powerSet([1,2,3,4],2));*/
//22. Count function part 2
function count2(sentence, char) {
    return sentence.split(char).length - 1;
}
/*console.log(count2('microsoft.com','o'));*/
//23. find the first not repeat letter
function nonRepeat(sentence) {
    for (let i of sentence) {
        if (sentence.split(i).length-1 == 1) {
            return i;
        }
    }
    return null;
}
/*console.log(nonRepeat('thequickbrownfoxjumpsoverthelazydog'));*/
//24. Write a javascript bubble sort
function bubbleSort(numArray) {
    for (let i = 0; i < numArray.length-1; i++) {
        for (let j = 0; j < numArray.length-1-i; j++) {
            if (numArray[j] > numArray[j-1]) {
                let temp = numArray[j-1];
                numArray[j-1] = numArray[j];
                numArray[j] = temp;
            }
        }
    }
    return numArray;
}
/*console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));*/
//25. Accepts a list of coutnries and returns the longest coutnry name
function longestName(countries) {
    let max = countries[0]
    for (let i of countries) {
        if (max.length < i.length) {
            max = i;
        }
    }
    return max;
}
//console.log(longestName(["Australia", "Germany", "United States of America"]));
//26. find the longest substring in a string without repeating characters
function longestNonRepeat(sentence) {
    let long = "";
    let curr = "";
    for (let i = 0; i < sentence.length; i++) {
        if (curr.includes(sentence[i])) {
            curr = curr.substring(curr.indexOf(sentence[i])+1);
        }
        curr += sentence[i];
        if (curr.length > long.length) {
            long = curr;
        }
    }
    return long;
}
/*console.log(longestNonRepeat('thequickbrownfoxjumpsoverthelazydog'));
console.log(longestNonRepeat('acadefgcadvgjksdk'));*/
//27. find the longest palindrome in a given string
function longestPalindrome(sentence) {
    let long = "";
    function expand(l, r) {
        while (l >= 0 && r < sentence.length && sentence[l] == sentence[r]){
            l--;
            r++;
        }
        return sentence.substring(l+1, r);
    }
    for (let i = 0; i< sentence.length; i++) {
        let odd = expand(i, i);
        let even = expand(i, i+1);
        if (odd.length > long.length) {
            long = odd;
        }
        if (even.length > long.length) {
            long = even;
        }
    }
    return long;
}
/*console.log(longestPalindrome('bananas'));*/
//28. Write a program that takes a function as a parameter
//29. function returns a function name
function meta(Function) {
    return Function.name;
}
console.log(meta(longestPalindrome));
console.log(meta(numReverse));