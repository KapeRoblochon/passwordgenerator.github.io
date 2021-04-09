const passwordOutput = document.getElementById('password-output');
const dataLowercase = "azertyuiopqsdfghjklmwxcvbn".split('');
const dataUppercase = "AZERTYUIOPQSDFGHJKLMWXCVBN".split('');
const dataNumbers = "0123456789".split('');
const dataSymbols = "!@#$%^&*-_=+\|:;',.>/?~".split('');

function generatePassword() {

	const data = [].concat (
		lowercase.checked ? dataLowercase : [],
		uppercase.checked ? dataUppercase : [],
		numbers.checked ? dataNumbers : [],
		symbols.checked ? dataSymbols : []
	);

	let passwordLenght = parseInt(document.getElementById('display-password-lenght').value);
	let newPassword = '';

	if (data.length === 0) {
		passwordOutput.innerHTML = "Générateur de MDP";
		alert('Veuillez séléctionner des critères');
		return;
	}

	for (let i = 0; i < passwordLenght; i++) {
		newPassword += data[Math.floor(Math.random() * data.length)];
	}
	passwordOutput.value = newPassword;

	passwordOutput.select();
	document.execCommand('copy');
	generateButton.innerHTML = "<b>Copié !</b>"
	setTimeout(() => {generateButton.innerHTML = "<b>Générer mot de passe</b>"}, 2500);



}