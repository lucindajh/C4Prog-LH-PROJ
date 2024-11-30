const historicalCheckBox = document.getElementById('historical-events');
const triviaCheckBox = document.getElementById('trivia');
const submitButton = document.getElementById('api-submit');
const userInput = document.getElementById('user-input');
const resultArea = document.getElementById('result');
const inputLabel = document.getElementById('input-label');

const baseUrl = 'https://api.api-ninjas.com/v1/'
const apiKey = '5pK+BaAZ5Mg82s6wdo1jkQ==IV7wZy4K0pXhFYk5'

historicalCheckBox.addEventListener("change", () => {
    if (triviaCheckBox.checked) {
        triviaCheckBox.checked = false
    }
    historicalCheckBox.checked ? inputLabel.textContent = 'enter a date (MM/DD):' : inputLabel.textContent = 'no api selected...'
    resultArea.textContent = ""
})

triviaCheckBox.addEventListener("change", () => {
    if (historicalCheckBox.checked) {
        historicalCheckBox.checked = false
    }
    triviaCheckBox.checked ? inputLabel.textContent = 'enter a trivia category:' : inputLabel.textContent = 'no api selected...'
    resultArea.textContent = ""
})
    
submitButton.addEventListener('click', () => {
    if (historicalCheckBox.checked) {

        if (userInput.value === ""){
            resultArea.textContent = "please enter a date in the box above"
        }

        else {
            let month = userInput.value.slice(0,2)
        let day = userInput.value.slice(3,5) 
        let fullUrl = baseUrl + 'historicalevents?' + 'month=' + month + '&day=' + day

        fetch(fullUrl, {
            headers: {"X-API-Key": apiKey},               
            contentType:"application/json"
                      
        }).then(function(response){
            if (response.ok){
                return response.json();
            }
            throw response.status
        }).then(function(data){
            if (data.length === 0){
                resultArea.textContent = 'please enter a date in MM/DD format in the box above'
            }
            let index = Math.floor(Math.random() * 9);
            const eventObj = data[index];
            resultArea.textContent = `${eventObj.event} (${eventObj.year})`;
        }).catch(function(error){
            console.warn(error);
        })
        }
       
    }

    else if (triviaCheckBox.checked) {
        
        const category = userInput.value === "" ? 'general' : userInput.value
               
        let fullUrl = baseUrl + 'trivia?category=' + category; 
        fetch(fullUrl, {
            headers: {"X-API-Key": apiKey},               
            contentType:"application/json"
                      
        }).then(function(response){
            if (response.ok){
                return response.json();
            }
            throw response.status
        }).then(function(data){
            if (data.length === 0){
                resultArea.textContent = 'sorry, that category does not exist'
            }
            else {
                resultArea.textContent = data[0].question + '?';
            }
            
        }).catch(function(error){
            console.warn(error);
        })
        
    }

    else {
        resultArea.textContent = "please select an API"
    }
    
})