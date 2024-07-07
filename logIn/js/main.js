let users = []
users = JSON.parse(localStorage.getItem('user'))

let signInEmail = document.getElementById('signEmail')
let signInPassword = document.getElementById('signPassword')

document.getElementById('login').addEventListener('click', function () {
    if (signInEmail.value == '' || signInPassword.value == '') {
        document.getElementById('message').innerHTML = `
                <p class='text-center'>All inputs are required<p>
        `
    } else {
        checkUser()
    }
})

function checkUser() {
    for (let i = 0; i < users.length; i++) {
        if (signInEmail.value == users[i].email && signInPassword.value == users[i].password) {
            let userName = users[i].name
            localStorage.setItem('userName', userName)
            location.href = '../home/index.html'
        }
    }
}
