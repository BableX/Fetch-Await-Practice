let avatar = document.getElementById('avatar')
let login = document.getElementById('login')
let userId = document.getElementById('user_id')
let userInput = document.getElementById('user_input')
let btn = document.getElementById('btn')

const getGitHubUser = async () => {
    let username = userInput.value

    let response = await fetch(`https://api.github.com/users/${username}`)
    let data = await response.json()

    login.innerHTML = data.login
    userId.innerHTML = data.id
    avatar.src = data.avatar_url
    avatar.style.display = "block"
};

btn.addEventListener('click', getGitHubUser)
