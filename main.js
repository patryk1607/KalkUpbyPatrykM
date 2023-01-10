const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const btn = document.querySelector('.count')
const error = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')




const calculator = () => {
    if(price.value == '' ||  people.value == '' ){

        costInfo.style.display = 'none'
        error.textContent  = 'Wypełnij wymagane pola'
        error.style.color = 'red'
        error.style.display = 'block'
    }else if(price.value == '' && people.value == '' ){
        costInfo.style.display = 'none'
        error.textContent  = 'Wypełnij wymagane pola'
        error.style.color = 'red'
        error.style.display = 'block'
    }
    else{
        calculatorEvent()
    }
}

const calculatorEvent = () => {
    const priceE = parseFloat(price.value);
    const peopleE = parseInt(people.value);
    const tipE = parseFloat(tip.value);
    

    const sum = (priceE + (priceE * tipE)) / peopleE
    console.log((tipE));

    cost.textContent = sum.toFixed(2);
   
    error.style.display = 'none'
    costInfo.style.display = 'block'
}



btn.addEventListener('click', calculator)