"use strict"
const myButton = document.getElementById('refreshQuote');
const chuckSays = document.getElementById('chuckSays');
const submitFormButton = document.getElementById('submitForm')
let category = "dev"

const getQuote = () => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;

    get(url).then(function(fetchResponse) {
        chuckSays.innerHTML = fetchResponse.value;
    })
}

const getCategories = () => {
    const url = `https://api.chucknorris.io/jokes/categories`;
    const dropDownMenu = document.getElementById("categoryInput");

    get(url).then(function(categoryArray) {
        categoryArray
            .filter((category) => category !== "explicit")
            .map(function (category){
                const categoryOption = document.createElement('option');
                categoryOption.value = category;
                categoryOption.text = category;
                dropDownMenu.append(categoryOption);
        });
    })
}

myButton.addEventListener('click', function (e) {
    event.preventDefault(e);
    getQuote();
});

// submitFormButton.addEventListener('click', function (e) {
//     e.preventDefault();
//     const userInput = document.getElementById('categoryInput');
//     const category = userInput.value;
//     getQuote(category);
// });

const getChuckQuotes =document.getElementById("getChuckQuotes");
getChuckQuotes.addEventListener("submit", e => {
    e.preventDefault();
    const userInput = document.getElementById('categoryInput');
    category = userInput.value;
    getQuote();
});

(function () {
    getCategories();
    getQuote();
})();
