const search = function () {

    const input = document.querySelector('.search-block > input ')
    const searchBtn= document.querySelector('.search-block > button ')
  

    searchBtn.addEventListener('click',() =>{
        console.log(input.value)
    })
  
  
};

search()
// console.log(input)
// console.log(searchBtn)
// input.addEventListener('input', (event) => {
//     console.log(event.target.value)
// })