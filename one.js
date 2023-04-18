window.onload = () => {
/*   1.Створити html документ, в якому є теги header, footer, nav, ul список на 5 елементів li. */
  /* 2. Отримати кожеш елемент з html документу в змінні. */
  let header = document.getElementById('header')
    let nav = document.getElementById('nav')
    let footer = document.getElementById('footer')
    let ul = document.getElementById('ul')
  
  console.log(header)
  console.log(nav)
  console.log(footer)
  console.log(ul)

  /* Створити змінну з массивом і заповнити всі li елементи данними з масиву. */
  let array = ['one', 'two', 'three', ' four', 'five']

  let ulFn = (array) => {
     
          for (let i = 0; i < array.length; i++){
          let liElement = document.getElementsByTagName('li')
          liElement[i].append(array[i])
      }
  }
  ulFn(array)


  /* 4.Створіть функцію яка приймає массив обєктів і створює div з классом
  product - list в якому є карторчки товару в вигляді діва з класом card  в середині інформація з обєкте */
  let arr = [
      { 
          name: 'Paul'
      },
      {
          name : 'Stive'
      },
      {
          name : 'JAck'
      }
  ]
let createFn = (array) => {
  let divElement = document.createElement('div')
      divElement.className = '.product-list'
      divElement.innerHTML = 'This div Element'
       
 const divBody = document.querySelector('body')
  divBody.appendChild(divElement)
  
  for (let i = 0; i < array.length; i++) {
      let divElementCard = document.createElement('div');
      divElementCard.className = '.card'
      divElementCard.innerHTML = array[i].name
  
      divElement.appendChild(divElementCard)
      console.log(divElement)
  }
}
 createFn(arr)
}



