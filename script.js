const subscript = document.querySelector('#subscript-button')
const img = document.querySelector('#img img')
const page = document.querySelector('#page')
subscript.addEventListener('click',subscribe)
window.addEventListener('resize', resize)
function subscribe(){
    if (subscript.onclick){

    }
}

function resize(){
    console.log(window.innerWidth)
    if (window.innerWidth < 745){
        img.style.display = 'none'
        page.style.width = '85vw'
    }
    if (window.innerWidth > 745){
        img.removeAttribute('style')
        page.removeAttribute('style')
    }
}