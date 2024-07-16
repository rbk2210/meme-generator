const horizontal = document.getElementById('horizontal')
const vertical = document.getElementById('vertical')
const memeContainer = document.querySelector('.meme-container')

const fileUpload = document.getElementById('file')

const superior = document.getElementById('superior')
const inferior = document.getElementById('inferior')
const addSuperior = document.getElementById('addSuperior')
const addInferior = document.getElementById('addInferior')

const textSuperior = document.getElementById('textSup')
const img = document.querySelector('.img')
const textInferior = document.getElementById('textInf')

const downloadButton = document.getElementById('download')
const labelDownload = document.getElementById('labelDownload')


horizontal.addEventListener('change', () => {
    vertical.checked = false
    horizontal.checked = true
    memeContainer.classList.remove('vertical')
    img.classList.remove('imgVertical')
})

vertical.addEventListener('change', () => {
    horizontal.checked = false
    vertical.checked = true
    memeContainer.classList.add('vertical')
    img.classList.add('imgVertical')

})

addSuperior.addEventListener('click',()=>{
    textSuperior.innerText = superior.value
    superior.value = ''
})

addInferior.addEventListener('click',()=>{
    textInferior.innerText = inferior.value
    inferior.value = ''
})

fileUpload.addEventListener('change',e=>{
    if (e.target.files[0]){
        const reader = new FileReader();
        reader.onload = function(e){
            img.src = e.target.result;
        }
        reader.readAsDataURL(e.target.files[0])
        labelDownload.style.display = 'block'
    }else{
        labelDownload.style.display = 'none'
    }
})

labelDownload.addEventListener('click',()=>{
    html2canvas(memeContainer).then(canvas =>{
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'meme.png'
        link.click();
    })
})
