// const T = require("tesseract.js")
import T from 'tesseract.js'
let res = document.querySelector("#res");
let imgform = document.querySelector("#img_form");
let file = document.getElementById("file").value;
function getData(){
    res.innerHTML = file
    T.recognize("sample2.png",'eng',{logger : e => {}})
        .then(out =>{res.innerHTML = out.data.text})
        console.log("end")
}
imgform.addEventListener("submit",(e)=>{
    console.log("Start")
    e.preventDefault()
    getData()
})

