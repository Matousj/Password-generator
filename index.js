function generatePassword() {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    const length = parseInt(document.getElementById("length").value);
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0) {
        document.getElementById("generated-password").innerText = "(Password length must be at least 1)";
        return;
    }
    if (allowedChars.length === 0) {
        document.getElementById("generated-password").innerText = "(At least 1 set of characters needs to be selected)";
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    document.getElementById("generated-password").innerText = password;
    document.getElementById("final").textContent = "Copy to Clipboard";
}

function copyToClipboard() {
    const password = document.getElementById("generated-password").innerText;
    if (!password) {
        alert("No password to copy!");
        return;
    }

    navigator.clipboard.writeText(password).then(() => {
        document.getElementById("final").textContent = "Copied!";
    }, (err) => {
        alert("Failed to copy password!");
        console.error("Failed to copy password: ", err);
    });
}