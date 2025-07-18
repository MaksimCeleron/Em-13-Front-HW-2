"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let program = prompt('Введіть номер програми(згідно з д/з): ');
function input(text) {
    let input = prompt(text);
    while (true) {
        if (input == '') {
            console.log('Значення не може бути порожнім.');
            input = prompt(text);
            continue;
        }
        else {
            break;
        }
    }
    return input;
}
if (program == '1') {
    const User = {
        fullName: ''
    };
    let first_name = input('Введіть ім\'я: ');
    let last_name = input('Введіть прізвище: ');
    User.fullName = first_name + ' ' + last_name;
    console.log('Повне ім\'я: ' + User.fullName);
}
else if (program == '2') {
    function check(word, input) {
        let out = false;
        if (word == input) {
            out = true;
        }
        return out;
    }
    let check_login = check('admin', input('Введіть логін: '));
    let check_password = check('12345', input('Введіть пароль: '));
    if (!check_login || !check_password) {
        console.log('Доступ заборонено.');
    }
    else {
        console.log('Вхід успішний.');
    }
}
else if (program == '3') {
    function check_string(string) {
        let result = false;
        if (string.length >= 5) {
            result = true;
        }
        return result;
    }
    function check_number(number) {
        let result = false;
        if (number > 0) {
            result = true;
        }
        return result;
    }
    let product_name = input('Введть назву товару: ');
    let product_desc = input('Введіть опис товару: ');
    let product_count = Number(input('Введіть кількість товару: '));
    let product_price = Number(input('Введіть ціну товару: '));
    while (true) {
        if (!check_string(product_name) || !check_string(product_desc)) {
            console.log('Якесь із введених значень має менше ніж 5 символів');
            if (!check_string(product_name)) {
                product_name = input('Введіть назву товару: ');
            }
            if (!check_string(product_desc)) {
                product_desc = input('Введіть опис товару: ');
            }
            continue;
        }
        else if (!check_number(product_count) || !check_number(product_price)) {
            console.log('Якесь із введених значень менше за нуль');
            if (!check_number(product_count)) {
                product_count = Number(input('Введіть кількість товару: '));
            }
            if (!check_number(product_price)) {
                product_price = Number(input('Введіть ціну товару: '));
            }
            continue;
        }
        else {
            break;
        }
    }
    const Product = {
        name: product_name,
        desc: product_desc,
        count: product_count,
        price: product_price
    };
    console.log('Об\'єкт продукта створено успішно.');
}
else if (program == '4') {
    function check_number(number) {
        let result = false;
        if (number > 0) {
            result = true;
        }
        return result;
    }
    let weight = Number(input('Введіть вагу: '));
    let height = Number(input('Введіть ріст: '));
    while (!check_number(weight) || !check_number(height)) {
        console.log('Якесь із введених значень менше за нуль');
        if (!check_number(weight)) {
            weight = Number(input('Введіть вагу: '));
        }
        if (!check_number(height)) {
            height = Number(input('Введіть ріст: '));
        }
    }
    let imt = weight / (Math.pow((height / 100), 2));
    console.log(imt);
}
//# sourceMappingURL=index.js.map