//let count = document.getElementById('count')
//count.innerText = 5

let countElement = document.getElementById('count-al')
let saveEl = document.getElementById('paragrah-el')



let count = 0;

function increment() {

    count += 1;
    countElement.innerText = count
    console.log(count)
    
}

    


function Save() {
    let saveElemnt =  + count + " - "
    saveEl.textContent += saveElemnt
    countElement.innerText = 0
    count = 0
    
}

function decrement() {

    count = count - 1
    countElement.innerText = count
    

}



