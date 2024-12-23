const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const seven = document.querySelector(".seven")
const eight = document.querySelector(".eight")

let container = document.querySelector(".wheel-container")
let btn = document.getElementById("btn")
let count = 0

function spinWheel() {
    // Отключаем кнопку после первого нажатия
    btn.disabled = true;
    btn.classList.add('dimmed'); // Добавляем класс для затемнения

    const min = 4;
    const max = 30; 
    const randomNumber = Math.floor(min + (max - min) * Math.random() + 1)
    count += 1780 + randomNumber
    container.style.transform = `rotate(${count}deg)`

    const local = one.getBoundingClientRect()
    console.log(local.x, local.y)

    console.log(count)
    
    setTimeout(() => {
        filter(two)
        filter(three)
        filter(four)
        filter(five)
        filter(six)
        filter(seven)
        filter(eight)

        // Включаем кнопку снова после завершения анимации
        btn.textContent = "Забрать"
        btn.disabled = false; // Включаем кнопку снова
        btn.classList.remove('dimmed'); // Убираем класс для затемнения
        btn.classList.add('highlight');

        btn.addEventListener('click', () => {
            window.location.href = 'https://snaket.net'; // Переход на другой сайт
        }, { once: true }); // Обработчик срабатывает только один раз
    }, 5000)    

    one.style.filter = "brightness(100%)"
    two.style.filter = "brightness(100%)"
    three.style.filter = "brightness(100%)" 
    four.style.filter = "brightness(100%)" 
    five.style.filter = "brightness(100%)" 
    six.style.filter = "brightness(100%)"
    seven.style.filter = "brightness(100%)" 
    eight.style.filter = "brightness(100%)"     

    function filter(name) {
        name.style.filter = "brightness(40%)"
    }
}

