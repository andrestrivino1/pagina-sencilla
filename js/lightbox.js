const  images = document.querySelectorAll('.img-gallery')
const imageLight = document.querySelector('.add-img')
const containerLight = document.querySelector('.img-light')
const menu1 = document.querySelector('menu');

images.forEach(image =>{
    image.addEventListener('click', ()=>{
       appier(image.getAttribute('src'))
    })
})

containerLight.addEventListener('click', (e)=>{
    if(e.target !== imageLight){
        containerLight.classList.toggle('show')
        imageLight.classList.toggle('showImage')
        menu1.style.opacity = '1'
    }
})

const appier = (image)=>{   
    imageLight.src = image;
    containerLight.classList.toggle('show')
    imageLight.classList.toggle('showImage')
    menu1.style.opacity = '0'
}