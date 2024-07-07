let signUpName = document.getElementById('signName')
let signUpEmail = document.getElementById('signEmail')
let signUpPassword = document.getElementById('signPassword')
let users = []

if (localStorage.getItem('user') != null) {
    users = JSON.parse(localStorage.getItem('user'))
} else {
    users = []
}

function add() {
    if (signUpName.value == '' || signUpEmail.value == '' || signUpPassword.value == '') {
        document.getElementById('message').innerHTML = `
        <p class='text-center'>All inputs are required<p>
        `
    } else {
        let user = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPassword.value
        }
        users.push(user)
        location.href = '../logIn/index.html'
        localStorage.setItem('user', JSON.stringify(users))
    }
}