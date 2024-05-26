const element = document.querySelector('.btn')
element.addEventListener("click", backgroundColor);

function backgroundColor() {
    let colorText= document.querySelector('.form-control').value ;
    document.body.style.backgroundColor = colorText
}