// Fonction pour vérifier le mot de passe et afficher l'image
function checkPassword() {
    const password = document.getElementById('password-input').value;
    const correctPassword = "bjgvebes#211sfrz"; // Définissez votre mot de passe ici
    
    if (password === correctPassword) {
        // Afficher l'image et masquer le formulaire de mot de passe
        document.getElementById('password-form').style.display = 'none';
        document.getElementById('protected-image').style.display = 'block';
        
        // Charger l'image après validation du mot de passe
        document.getElementById('protected-image').src = 'Images/SI.png';
    } else {
        alert('Mot de passe incorrect. Veuillez réessayer.');
    }
}