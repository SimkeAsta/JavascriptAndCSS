function flight(email, reservationNumber, departure, arrival) {
    this.email = email;
    this.reservationNumber = reservationNumber;
    this.departure = departure;
    this.arrival = arrival;
}

var Asta = new flight("asta@gmail.com", 123456, "Vilnius", "Barcelona");
var Inga = new flight("inga@gmail.com", 456321, "Vilnius", "Abu Dhabi");
var Tomas = new flight("tomas@gmail.com", 987654, "Vilnius", "Dheli");
var passangers = [Asta, Inga, Tomas];

const button = document.getElementById("btn");
const input = document.getElementById("inputEmail");
const number = document.getElementById("inputReservation");

button.addEventListener("click", function () {
    var emailAddress = input.value;
    var reservation = number.value;
    var z = 0;
    for (i = 0; i < passangers.length; i++) {
        var client = passangers[i];
        if (emailAddress == client.email && reservation == client.reservationNumber) {
        swal(client.departure + " \u2708 " + client.arrival);
            z++;
            break;
        }
    } if (z == 0) {
        swal("Please check your email or registration code.")
    }
});
