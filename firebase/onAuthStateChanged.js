function onAuthStateChanged(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var uid = user.uid;
            sessionStorage.setItem('ses', uid)
            location = "index.html"
        } else {
            
        }
    });
}

onAuthStateChanged()