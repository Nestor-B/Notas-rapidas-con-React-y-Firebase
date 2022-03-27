function signOut(){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        sessionStorage.removeItem('ses')
        location = "index.html"
    }).catch((error) => {
        // An error happened.
    });

    setTimeout(()=>{
        location.reload()
    }, 5000)
}

signOut()