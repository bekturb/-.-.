

//- **Стили**//

//Самый простой способ управления стилями CSS - это манипулирование атрибутом style отдельных элементов документа.//

// window.addEventListener('load', function (){
//     const block = document.querySelector('.block')
//     block.style.height = '150px'
//     block.style.width = '500px'
//     block.style.margin = '0 auto'
//     block.style.border = '3px solid black'
//     block.style.textAlign = 'center'
//     block.style.background = 'yellow'
//
// })

//Несколько стилей в одной строке//

// window.addEventListener('load', function (){
//     const block = document.querySelector('.block')
//
//     block.style.cssText = `
//     height: 150px;
//     width: 500px;
//     margin: 0 auto;
//     border: 3px solid black;
//     text-align: center;
//     background: yellow;
//     `
// })

//Получение вычисленных стилей//

// window.addEventListener("load", function () {
//     const block = document.querySelector(".block");
//
//     block.style.cssText = `
//     height: 150px;
//     width: 500px;
//     margin: 0 auto;
//     padding: 20px;
//     border: 3px solid black;
//     text-align: center;
//     font-weight: bold;
//     font-size: 30px;
//     background: yellow;
//   `;

//     console.log(block)
//     const blockHeight = getComputedStyle(block).height
//     const heightBlock = blockHeight.slice(0,3)
//
//     const divChild = document.createElement('div')
//     block.append(divChild)
//
//     divChild.style.cssText = `
//     height: ${heightBlock /2}px;
//     width: 200px;
//     margin: 0 auto;
//     background: red;
//     `
//     ;
// });


//Получение класса: className//

// window.addEventListener('load', function(){
//
//     const block = document.querySelector('.block')
//     console.log(block.className)
//     console.log(block.classList)
// })



// Получение класса: classList //


// window.addEventListener('load', function(){
//
//     const block = document.querySelector('.block')
//     console.log(block.className)
//     console.log(block.classList)
// })


//Добавление класса: className//

// window.addEventListener('load', function(){
//
//     const block = document.querySelector('.block')
//     console.log(block.className)
//     console.log(block.classList)
//
//
//     block.className = 'hello'
//
//     console.log(block) // hello
//
//
//     //Добавление класса: add()//
//
//     block.classList.add('block-active')
//
//     //Удаление класса: remove()//
//
//     block.classList.remove('hello')
//
//     //Переключение класса: toggle()//
//
//     block.classList.toggle('hello')
//     block.classList.toggle('hello')
//
//     block.classList.replace('block-active', 'hello')
//
//     //Проверка существования класса: contains()//
//
//     console.log(block.classList.contains('hello'))//true
// })



//Обработка событий//

// const block = document.querySelector('.block')
// function sayHi(){
//     block.append('Hello')
// }



// function sayHi() {
//     alert("hello");
// }


// const block = document.querySelector('.block')
// const title = document.querySelector('.title')
// const btn = document.querySelector('.btn')
// const input = document.querySelector('input')
//
// function sayHello(){
//     block.style.background = 'black'
//     btn.style.background = 'black'
//     btn.style.width = '70px'
//     btn.style.height = '40px'
//     btn.style.border = '2px solid white'
//     btn.style.color = 'white'
//     title.style.color = 'white'
// }
//
// function sayHi(){
//     input.classList.toggle('input')
//
// }



// const button = document.querySelector('.button')
// const modal = document.querySelector('.modal')
// const ixs = document.querySelector('.ixs')
//
// button.addEventListener('click', function (){
//     modal.style.display = 'block'
//     button.style.display = 'none'
// })
//
// ixs.addEventListener('click', function (){
//     button.style.display = 'block'
//     modal.style.display = 'none'
// })


const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");

btn.addEventListener("click", function () {
    modal.classList.add("active");
});

modalClose.addEventListener("click", function () {
    modal.classList.remove("active");
})