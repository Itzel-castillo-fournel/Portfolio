// Fonction pour vérifier le mot de passe et afficher l'image
function checkPassword() {
    const password = document.getElementById('password-input').value;
    const correctPassword = ""; 
    
    if (password === correctPassword) {
        // Affiche l'image et masquer le formulaire de mot de passe
        document.getElementById('password-form').style.display = 'none';
        document.getElementById('protected-image').style.display = 'block';
        
        // Charge l'image après validation du mot de passe
        document.getElementById('protected-image').src = 'Images/SI.png';
    } else {
        alert('Mot de passe incorrect. Veuillez réessayer.');
    }
}

function checkPasswordEngagement() {
    var password = document.getElementById("password-input").value;
    const correctPassword = "";

    if (password === correctPassword) {
        document.getElementById("protected-content").style.display = "block";
        document.getElementById("password-form").style.display = "none";
    } else {
        alert("Mot de passe incorrect. Veuillez réessayer.");
    }
}

