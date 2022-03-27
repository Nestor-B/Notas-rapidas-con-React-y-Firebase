function signIn(email, pass){
    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then((userCredential) => {
        var user = userCredential.user;
            console.log(user)
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
}