function createUser(email, password) {
    if (!emailIsValid(email)) {
        console.log('Invalid email!');
        return;
    }
    else if (!passwordIsValid(password)) {
        console.log('Invalid password!');
        return;
    }

    const user = {
        email: email,
        password: password
    };

    database.insert(user);
}

function emailIsValid(email) {
    return !email || !email.includes('@');
}

function passwordIsValid(password) {
    return !password || password.trim() === '';
}