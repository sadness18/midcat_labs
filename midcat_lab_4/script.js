document.getElementById('main_form').addEventListener("submit", check_form);
document.getElementById('input_num').addEventListener("input", check_input_num);

function check_form(event) // функция обработчик события нажатия на кнопку "Рассчитать"
{
    event.preventDefault(); // отключаем обновление страницы по нажатию кнопки "Рассчитать"
    var el = document.getElementById('main_form');
    var res = document.getElementById('result_div');
    var interval = document.getElementById('interval_div');

    var input_num = parseInt(el.input_num.value, 10);
    var max = -Infinity;
    var min = Infinity;
    var arg_max, arg_min, root_func, check_root, integral, y;

    integral = ((7/2)*Math.pow(input_num, 4) - (28/3)*Math.pow(input_num, 3) + 0.5*(input_num) - ((7/2)*Math.pow(-input_num, 4) - (28/3)*Math.pow(-input_num, 3) + 0.5*(-input_num)));

    for (var x = -input_num; x <= input_num; x += 0.01)
    {
        y = 14*Math.pow(x, 3) - 28*Math.pow(x, 2) + 0.5;
        
        if (y > max)
        {
            max = y;
            arg_max = x;
        }

        if (y < min)
        {
            min = y;
            arg_min = x;
        }

        if (check_root * y < 0)
        {
            root_func = x;
        }

        check_root = y;
    }

    interval.innerHTML = "Интервал: [-" + input_num + "; " + input_num + "]";
    res.innerHTML = "Корни функции: " + root_func + "<br />Интеграл: " + integral + "<br />Минимальное значение функции: " + min + ", при х = " + arg_min + "<br />Максимальное значение функции: " + max + ", при х = " + arg_max;
}

function check_input_num() // Функция проверки на правильность ввода
{
    var input_num = document.getElementById('input_num').value;
    var err_div = document.getElementById('err_div');
    var sub_btn = document.getElementById('sub_btn');

    if (!(parseInt(input_num, 10).toString() == input_num) || input_num > 10 || input_num < 1)
    {
        err_div.innerHTML = "Пожалуйста введите целое положительное число от 1 до 10";
        sub_btn.disabled = true;
    }
    else
    {
        err_div.innerHTML = "";
        sub_btn.disabled = false;
    }
}