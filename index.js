const btnMobile = document.getElementById('btn_mobile')


//Criando função que será ativada quando clicar nele
function toggleMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')

}

btnMobile.addEventListener('click', toggleMenu)

// const nav = document.getElementById('nav')
// console.log(nav)