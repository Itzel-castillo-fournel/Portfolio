const _0x18f3 = [
    'SHA-256', 'subtle', 'digest', 'then', 'catch', 'error',
    'encode', 'value', 'password-input', 'getElementById',
    'display', 'style', 'none', 'block', 'protected-content',
    'password-form', 'protected-image', 'src', 'Images/SI.png',
    'add', 'classList', 'visible',
    'Mot de passe incorrect. Veuillez réessayer.',
    ''
];


async function digestMessage(message) {
    try {
        const msgBuffer = new TextEncoder().encode(message);
        const hashBuffer = await crypto.subtle.digest(_0x18f3[0], msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    } catch (error) {
        console.error('Erreur de hachage:', error);
        return null;
    }
}

// Fonction pour vérifier le mot de passe pour l'image
async function checkPassword() {
    const password = document[_0x18f3[9]](_0x18f3[8])[_0x18f3[7]];
    const hashedPassword = await digestMessage(password);
    
    if (hashedPassword === _0x18f3[23]) {
        // Masquer le formulaire de mot de passe
        document[_0x18f3[9]](_0x18f3[15])[_0x18f3[11]][_0x18f3[10]] = _0x18f3[12];
        
        // Afficher et charger l'image
        const imageElement = document[_0x18f3[9]](_0x18f3[16]);
        imageElement[_0x18f3[11]][_0x18f3[10]] = _0x18f3[13];
        imageElement[_0x18f3[17]] = _0x18f3[18];
    } else {
        alert(_0x18f3[22]);
    }
}

// Fonction pour vérifier le mot de passe pour la section engagement
async function checkPasswordEngagement() {
    const password = document[_0x18f3[9]](_0x18f3[8])[_0x18f3[7]];
    const hashedPassword = await digestMessage(password);
    
   
    if (hashedPassword === _0x18f3[23]) {
        // Afficher le contenu protégé
        const protectedContent = document[_0x18f3[9]](_0x18f3[14]);
        protectedContent[_0x18f3[11]][_0x18f3[10]] = _0x18f3[13];
        protectedContent[_0x18f3[20]][_0x18f3[19]](_0x18f3[21]);
        
        // Masquer le formulaire de mot de passe
        document[_0x18f3[9]](_0x18f3[15])[_0x18f3[11]][_0x18f3[10]] = _0x18f3[12];
    } else {
        alert(_0x18f3[22]);
    }
}

