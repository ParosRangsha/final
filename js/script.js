let headtitle = document.querySelector("#headtitle")
let headtxt = ["Dispo", "Start Roll", "End Roll", "Total Roll", "QTY", "Remark"]
headtxt.map((item)=>{
    headtitle.innerHTML += `<li class="headitem">${item}</li>`
})
let headli = document.querySelectorAll(".headitem")
let arrheadli = Array.from(headli)
arrheadli.map((itemli)=>{
    console.log(itemli);
    
    itemli.style.width = `calc(100%/ ${headtxt.length})`
    itemli.style.textAlign = 'center'
    itemli.style.padding = "10px 15px"
    itemli.style.border = "1px solid #ccc"

})