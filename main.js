const dropArea = document.querySelector(".drag-area");
const dragText = dropArea.querySelector('header');
const button   = dropArea.querySelector('button');
const input   = dropArea.querySelector('input');
let file; // this is a global varibale and we will use it inside multiple fuction
// if user drage the file


button.onclick = ()=>{
    input.click();
}

input.addEventListener('change',function(){
file = this.files[0];
ShowData();
});
dropArea.addEventListener("dragover",(e)=>{
    e.preventDefault();
    dropArea.classList.add('active');
    dragText.textContent = "Relase To upload File";
})

// if user Leave the file
dropArea.addEventListener("dragleave",(e)=>{
    e.preventDefault();
    console.log('file is outside');
    dropArea.classList.remove('active');
    dragText.textContent = "Drag & Drop to Upload File";
})

// if user dropped the file
dropArea.addEventListener("drop",(e)=>{
    e.preventDefault();
    file = e.dataTransfer.files[0];
    ShowData();
   
})

function ShowData(){
    let filetype = file.type;

    let vailedExtensiton = ["image/jpeg","image/jpg","image/png"] // adding some vaid image extentions
    if (vailedExtensiton.includes(filetype)) {
        let fileReader = new FileReader();
        fileReader.onload = () =>{
            let fileURL = fileReader.result;
            let img = `<img src="${fileURL}" alt="">`;
            dropArea.innerHTML = img;
            console.log(file)
            console.log(fileReader)
        }
        fileReader.readAsDataURL(file);
    }else{
        alert('This is not image !')
    }
}

