import promptSync from 'prompt-sync';
const prompt = promptSync();

let program = prompt('Введіть номер програми(згідно з д/з): ');

function input(text: string): string
{
    let input = prompt(text);

    while (true)
    {
        if (input == '')
        {
            console.log('Значення не може бути порожнім.');
            input = prompt(text);
            continue;
        } else {
            break;
        }
    }

    return input;
}

if (program == '1')
{
    const User: { fullName: string } = {
        fullName: ''
    };

    let first_name = input('Введіть ім\'я: ');
    let last_name = input('Введіть прізвище: ');

    User.fullName = first_name + ' ' + last_name;

    console.log('Повне ім\'я: ' + User.fullName);
} else if (program == '2')
{
    function check(word: string, input: string): boolean
    {
        let out: boolean = false;

        if (word == input)
        {
            out = true;
        }

        return out;
    }

    let check_login: boolean = check('admin', input('Введіть логін: '));
    let check_password: boolean = check('12345', input('Введіть пароль: '));

    if (!check_login || !check_password)
    {
        console.log('Доступ заборонено.');
    } else {
        console.log('Вхід успішний.');
    }
} else if (program == '3')
{
    function check_string(string: string): boolean
    {
        let result: boolean = false;

        if (string.length >= 5)
        {
            result = true;
        }

        return result;
    }

    function check_number(number: number): boolean
    {
        let result: boolean = false;

        if (number > 0)
        {
            result = true;
        }

        return result;
    }

    let product_name = input('Введть назву товару: ');
    let product_desc = input('Введіть опис товару: ');
    let product_count: number = Number(input('Введіть кількість товару: '));
    let product_price: number = Number(input('Введіть ціну товару: '));

    while (true)
    {
        if (!check_string(product_name) || !check_string(product_desc))
        {
            console.log('Якесь із введених значень має менше ніж 5 символів');
            if (!check_string(product_name))
            {
                product_name = input('Введіть назву товару: ');
            }
            if (!check_string(product_desc))
            {
                product_desc = input('Введіть опис товару: ');
            }
            continue;
        } else if (!check_number(product_count) || !check_number(product_price))
        {
            console.log('Якесь із введених значень менше за нуль');
            if (!check_number(product_count))
            {
                product_count = Number(input('Введіть кількість товару: '));
            }
            if (!check_number(product_price))
            {
                product_price = Number(input('Введіть ціну товару: '));
            }
            continue;
        } else {
            break;
        }
    }

    const Product: { name: string, desc: string, count: number, price: number } = {
        name: product_name,
        desc: product_desc,
        count: product_count,
        price: product_price
    }

    console.log('Об\'єкт продукта створено успішно.');
} else if (program == '4')
{
    function check_number(number: number): boolean
    {
        let result: boolean = false;

        if (number > 0)
        {
            result = true;
        }

        return result;
    }

    let weight: number = Number(input('Введіть вагу: '));
    let height: number = Number(input('Введіть ріст: '));

    while (!check_number(weight) || !check_number(height)) {
        console.log('Якесь із введених значень менше за нуль');
        if (!check_number(weight)) {
            weight = Number(input('Введіть вагу: '));
        }
        if (!check_number(height)) {
            height = Number(input('Введіть ріст: '));
        }
    }

    let imt: number = weight / ((height / 100) ** 2);
    imt = Number(imt.toFixed(1));

    if (imt < 18.5)
    {
        console.log('Недостатня вага.');
    } else if (imt > 18.5 && imt < 24.9)
    {
        console.log('Нормальна вага.');
    } else if (imt > 25 && imt < 29.9)
    {
        console.log('Надмірна вага.');
    }
} else if (program == '5')
{
    function check_length(input: string, min: number, max?: number): boolean
    {
        if (max)
        {
            return input.length >= min && input.length <= max;
        } else {
            return input.length >= min;
        }
    }

    function check_if_contains(input: string, string: string): boolean
    {
        return input.includes(string);
    }

    function check_for_single_char(password: string): boolean
    {
        for (let i = 1; i < password.length; i++)
        {
            if (password[i] != password[0])
            {
                return true;
            }
        }

        return false;
    }

    function check_age(born: number): boolean
    {
        return 2025 - born > 17 && 2025 - born < 100;
    }

    let email = input('Введіть електронну пошту: ');
    while (!check_length(email, 8) || !check_if_contains(email, '@') || !check_if_contains(email, '.'))
    {
        console.log('Ви ввели неправильну електронну пошту.')
        email = input('Введіть електронну пошту: ');
    }

    let password = input('Введіть пароль: ');
    while (!check_length(password, 8, 16) || !check_for_single_char(password))
    {
        if (!check_length(password, 8, 16))
        {
            console.log('Пароль має складатись мінімум з 8, а максимум з 16 символів.');
        } else {
            console.log('Пароль не має складатись з одного й того самого символа.');
        }
        password = input('Введіть пароль: ');
    }

    let born: number = Number(input('Введіть рік народження: '));
    while (!check_age(born))
    {
        console.log('Вік має бути більшим за 17 років і меншим за 100 років.');
        born = Number(input('Введіть рік народження: '));
    }

    const User: { email: string, password: string, born: number } = {
        email: email,
        password: password,
        born: born
    }
} else if (program == '6')
{
    let userinput = input('Введіть температуру і одиницю вимірювання: ');

    let temperature: number = Number(userinput.split(' ')[0]);
    let unit = userinput.split(' ')[1].toUpperCase();

    if (unit == "C")
    {
        temperature = (temperature * 9/5) + 32;
        console.log('Температура в F: ' + temperature);
    } else if (unit == "F")
    {
        temperature = (temperature - 32) * 5/9;
        console.log('Температура в C: ' + temperature);
    }
}