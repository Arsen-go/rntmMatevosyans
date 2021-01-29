window.onload = function () {
    document.getElementById("sendMessage").addEventListener('click', () => {
        sendMessageRntm();
    })
}

function sendMessageRntm() {
    let time = new Date();
    let currDay = time.getFullYear() + ":" + time.getMonth() + ":" + time.getDate();
    let currTime = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    let fullTime = currDay + " " + currTime;
    let obj = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        sendTime: fullTime,
    }
    fetch('/messageRntm', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(obj)
    })
        .then((res) => {
            return res.json();
        })
        .then((obj) => {
            console.log(obj)
        });
}

function saveUserEmail() {
    let userEmail = document.getElementById("inputEmail");
    if (!userEmail.value.length) {
        document.getElementById("sendInfoToUser").innerHTML = "Please write your Email";
        return;
    }

    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userEmail.value))) {
        document.getElementById("sendInfoToUser").innerHTML = "Email address is not valid";
        return;
    }

    let userName = document.getElementById("inputName");
    if (!userName.value.length) {
        document.getElementById("sendInfoToUser").innerHTML = "Please write your Name";
        return;
    }


    document.getElementById("sendInfoToUser").innerHTML = '';
    fetch('/saveUser', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ email: userEmail.value, name: userName.value })
    }).then((res) => {
        return res.json();
    })
        .then((obj) => {
            localStorage.setItem("userEmail", obj.result.email);
            localStorage.setItem("userName", obj.result.name);
            window.location.href = "/main-page.html";
        });
}
