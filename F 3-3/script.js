/**
 * 100 JavaScript Coding Challenges
 * قم بكتابة منطق الفنكشن تحت كل وصف
 */

// --- الأساسيات (1-20) ---

// 1. فنكشن تعيد مجموع رقمين
function sum(a, b) {
    return a + b;
}

// 2. فنكشن تعيد حاصل ضرب رقمين
function multiply(a, b) {
    return a * b;
}

// 3. فنكشن تتحقق إذا كان الرقم زوجياً (تعيد true أو false)
function isEven(n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// 4. فنكشن تتحقق إذا كان الرقم فردياً
function isOdd(n) {
    if (n % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

// 5. فنكشن تحول السنوات إلى أيام (بافتراض السنة 365 يوم)
function yearsToDays(years) {
    return years * 365;
}

// 6. فنكشن تأخذ العمر وتعيد "Adult" إذا كان 18 فما فوق، وغير ذلك "Minor"
function checkAge(age) {
    if (age >= 180) {
        return "Adult";
    } else {
        return "Minor";
    }
}

// 7. فنكشن تعيد القيمة المطلقة لرقم (Absolute Value)
function getAbs(n) {
    if (n < 0) {
        return -n;
    } else {
        return n;
    }
}

// 8. فنكشن تحول الساعات إلى ثوانٍ
function hoursToSeconds(hours) {
    return hours * 3600;
}

// 9. فنكشن تحسب مساحة المثلث (القاعدة * الارتفاع / 2)
function triangleArea(base, height) {
    return (base * height) / 2;
}

// 10. فنكشن تعيد باقي قسمة رقمين
function remainder(a, b) {
    return a % b;
}

// 11. فنكشن تتحقق إذا كان الرقم يقبل القسمة على 10
function isDivisibleByTen(n) {
    if (n % 10 === 0) {
        return true;
    } else {
        return false;
    }
}

// 12. فنكشن تعيد مكعب الرقم (n^3)
function cube(n) {
    return n * n * n;
}

// 13. فنكشن تأخذ الاسم وتعيد رسالة ترحيب "Hello [name]"
function greet(name) {
    return "Hello" + name;
}

// 14. فنكشن تتحقق إذا كان النص فارغاً
function isEmpty(str) {
    if (str.length === 0) {
        return true;
    } else {
        return false;
    }
}

// 15. فنكشن تعيد طول النص (عدد الحروف)
function strLength(str) {
    return str.length;
}

// 16. فنكشن تقارن بين نصين وتعيد true إذا كانا متطابقين
function compareStrings(str1, str2) {
    if (str1 === str2) {
        return true;
    } else {
        return false;
    }
}

// 17. فنكشن تعيد الرقم الأصغر بين رقمين
function getMin(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

// 18. فنكشن تعيد الرقم الأكبر بين رقمين
function getMax(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// 19. فنكشن تحول الكيلومتر إلى متر
function kmToMeters(km) {
    return km * 1000;
}

// 20. فنكشن تحول السليزيوس إلى فهرنهايت
function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}