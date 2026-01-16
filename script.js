/**
 * 100 JavaScript Coding Challenges
 * قم بكتابة منطق الفنكشن تحت كل وصف
 */

// --- الأساسيات (1-20) ---

// 1. فنكشن تعيد مجموع رقمين
function sum(a, b) {
    return a + b;
}
console.log('sum(5, 3) =', sum(5, 3));

// 2. فنكشن تعيد حاصل ضرب رقمين
function multiply(a, b) {
    return a * b;
}
console.log('multiply(5, 3) =', multiply(5, 3));

// 3. فنكشن تتحقق إذا كان الرقم زوجياً (تعيد true أو false)
function isEven(n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log('isEven(4) =', isEven(4));

// 4. فنكشن تتحقق إذا كان الرقم فردياً
function isOdd(n) {
    if (n % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}
console.log('isOdd(4) =', isOdd(4));

// 5. فنكشن تحول السنوات إلى أيام (بافتراض السنة 365 يوم)
function yearsToDays(years) {
    return years * 365;
}
console.log('yearsToDays(2) =', yearsToDays(2));

// 6. فنكشن تأخذ العمر وتعيد "Adult" إذا كان 18 فما فوق، وغير ذلك "Minor"
function checkAge(age) {
    if (age >= 180) {
        return "Adult";
    } else {
        return "Minor";
    }
}
console.log('checkAge(20) =', checkAge(20));

// 7. فنكشن تعيد القيمة المطلقة لرقم (Absolute Value)
function getAbs(n) {
    if (n < 0) {
        return -n;
    } else {
        return n;
    }
}
console.log('getAbs(-5) =', getAbs(-5));

// 8. فنكشن تحول الساعات إلى ثوانٍ
function hoursToSeconds(hours) {
    return hours * 3600;
}
console.log('hoursToSeconds(2) =', hoursToSeconds(2));

// 9. فنكشن تحسب مساحة المثلث (القاعدة * الارتفاع / 2)
function triangleArea(base, height) {
    return (base * height) / 2;
}
console.log('triangleArea(5, 4) =', triangleArea(5, 4));

// 10. فنكشن تعيد باقي قسمة رقمين
function remainder(a, b) {
    return a % b;
}
console.log('remainder(10, 3) =', remainder(10, 3));


// 11. فنكشن تتحقق إذا كان الرقم يقبل القسمة على 10
function isDivisibleByTen(n) {
    if (n % 10 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log('isDivisibleByTen(20) =', isDivisibleByTen(20));

// 12. فنكشن تعيد مكعب الرقم (n^3)
function cube(n) {
    return n * n * n;
}
console.log('cube(3) =', cube(3));


// 13. فنكشن تأخذ الاسم وتعيد رسالة ترحيب "Hello [name]"
function greet(name) {
    return "Hello" + name;
}
console.log('greet("Ali") =', greet("Ali"));

// 14. فنكشن تتحقق إذا كان النص فارغاً
function isEmpty(str) {
    if (str.length === 0) {
        return true;
    } else {
        return false;
    }
}
console.log('isEmpty("") =', isEmpty(""));

// 15. فنكشن تعيد طول النص (عدد الحروف)
function strLength(str) {
    return str.length;
}
console.log('strLength("Hello") =', strLength("Hello"));

// 16. فنكشن تقارن بين نصين وتعيد true إذا كانا متطابقين
function compareStrings(str1, str2) {
    if (str1 === str2) {
        return true;
    } else {
        return false;
    }
}
console.log('compareStrings("abc","abc") =', compareStrings("abc","abc"));

// 17. فنكشن تعيد الرقم الأصغر بين رقمين
function getMin(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log('getMin(5,3) =', getMin(5,3));

// 18. فنكشن تعيد الرقم الأكبر بين رقمين
function getMax(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log('getMax(5,3) =', getMax(5,3));


// 19. فنكشن تحول الكيلومتر إلى متر
function kmToMeters(km) {
    return km * 1000;
}
console.log('kmToMeters(3) =', kmToMeters(3));

// 20. فنكشن تحول السليزيوس إلى فهرنهايت
function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}
console.log('celsiusToFahrenheit(0) =', celsiusToFahrenheit(0));

// --- المصفوفات والنصوص (21-40) ---

// 21. فنكشن تعيد أول عنصر في المصفوفة
function getFirstElement(arr) {
    if (arr.length === 0) {
        return null;
    } else  {
     return arr[0];
    }
}
console.log('getFirstElement([1,2,3]) =', getFirstElement([1,2,3]));

// 22. فنكشن تعيد آخر عنصر في المصفوفة
function getLastElement(arr) {
    if (arr.length === 0) {
        return null;
    } else {
        return arr[arr.length - 1];
    }
}
console.log('getLastElement([1,2,3]) =', getLastElement([1,2,3]));

// 23. فنكشن تعيد مجموع كل الأرقام في المصفوفة
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log('sumArray([1,2,3,4]) =', sumArray([1,2,3,4]));

// 24. فنكشن تعيد متوسط أرقام المصفوفة
function averageArray(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum / arr.length;
    }
}
console.log('averageArray([1,2,3,4]) =', averageArray([1,2,3,4]));

// 25. فنكشن تبحث عن عنصر داخل المصفوفة وتعيد true إذا وجد
function findElement(arr, elem) {
    for (let i = 0; i< arr.length; i++) {
        if (arr[i] == elem) {
            return true;
        }
    }
    return false;
}
console.log('findElement([1,2,3],2) =', findElement([1,2,3],2));

// 26. فنكشن تعيد مصفوفة جديدة تحتوي على الأرقام الزوجية فقط من المصفوفة الأصلية
function filterEvens(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log('filterEvens([1,2,3,4]) =', filterEvens([1,2,3,4]));

// 27. فنكشن تعكس ترتيب المصفوفة
function reverseArray(arr) {
    let result = [];
    for (let i = arr.length -1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}
console.log('reverseArray([1,2,3]) =', reverseArray([1,2,3]));

// 28. فنكشن تعكس النص (مثال: "abc" تصبح "cba")
function reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
console.log('reverseString("abc") =', reverseString("abc"));