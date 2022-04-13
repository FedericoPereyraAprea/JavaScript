let user = "javi";
let password = "gimenez";
let login;
do {
	let userInput = prompt("Ingresar usuario por favor");
	let passwordInput = prompt("Ingresar password por favor");
 	login = (userInput == user && passwordInput == password)? true : false;
} while (login == false);
alert("¡Bienvenido " + user + " a graficaB377!");