//Konstruktorius

function register(name, lastname, age, performance, url) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.performance = performance;
    this.url = url;
}

// Keletas papildomų masyvo elementų ir jų sukėlimas į masyvą.
var Petras = new register("Petras", "Makis", "31-40", "something", "www.youtube.com");
var Sima = new register("Sima", "Panke", "19-24", "else", "www.youtube.com");
var Domas = new register("Domas", "Simkus", "13-18", "other", "www.youtube.com");
var members = [Petras, Sima, Domas];

// Gaunama forma ir duomenys iš formos sukeliami į masyvą.
document.querySelector("#myForm").addEventListener("submit", function (getData) {
    getData.preventDefault();
    var dataArray = [];
    dataArray.push(getData);
    console.log(dataArray);
    console.log(getData);
    console.log(getData.target.elements.firstname.value);
    console.log(getData.target.elements.lastname.value);
    console.log(getData.target.elements.age.value);
    console.log(getData.target.elements.performance.value);
    console.log(getData.target.elements.url.value);
    alert("You've registered successfully!")
});

// viršuje esančios formos paieškos funkcija.

const button = document.getElementById("btn");
const input = document.getElementById("search");

button.addEventListener("click", (getData) => {
    let inputFound = dataArray.find(element => 
        (element.name === getData.target.elements.name.value));
    if (inputFoundFound) {
        alert("Well done");
    } else {
        alert("Please check the name you've entered.")
    }
});



