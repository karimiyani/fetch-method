const getBtn = document.querySelector(".get-data");
const getBtn2 = document.querySelector(".get-data2");
const getBtn3 = document.querySelector(".get-data3");

const posttBtn = document.querySelector(".post-data");

getBtn.addEventListener("click", getData);

function getData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        console.log(response);
    });
}
// Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/users', redirected: false, status: 200, ok: true, …}


//we have to parse
getBtn2.addEventListener("click", getData2);
function getData2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    }).then( data => console.log(data))
}
// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]


//we just fetch to user with id 5
getBtn3.addEventListener("click", getData3);
function getData3(){
    fetch('https://jsonplaceholder.typicode.com/users/5')
    .then((response) => {
        return response.json();
    }).then( data => console.log(data))
}
// {id: 5, name: 'Chelsey Dietrich', username: 'Kamren', email: 'Lucio_Hettinger@annie.ca', address: {…}, …}