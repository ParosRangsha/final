let headtitle = document.querySelector("#headtitle")
let headtxt = ["Date", "Dispo", "Start Roll", "End Roll", "Total Roll", "QTY", "Remark"]
headtxt.map((item)=>{
    headtitle.innerHTML += `<li class="headitem">${item}</li>`
})
let headli = document.querySelectorAll(".headitem")
let arrheadli = Array.from(headli)
arrheadli.map((itemli)=>{
    itemli.style.width = `calc(100%/ ${headtxt.length})`
    itemli.style.textAlign = 'center'
    itemli.style.padding = "10px 0px"
    itemli.style.border = "1px solid #ccc"
})
let display = document.querySelector("#display")
ho.map((hoitem)=>{
    
    display.innerHTML += `<li class="myli"><a href="#" class="ditem"> ${hoitem.DT} </a> <a href="#" class="ditem"> ${hoitem.DS} </a><a href="#" class="ditem"> ${hoitem.SR} </a><a href="#" class="ditem"> ${hoitem.ER} </a><a href="#" class="ditem"> ${hoitem.TR} </a><a href="#" class="ditem"> ${hoitem.QT} </a><a href="#" class="ditem remar"> ${hoitem.RM} </a>`
})
let ditem = document.querySelectorAll(".ditem")
let arrditem = Array.from(ditem)
console.log(arrditem);

arrditem.map((myspan)=>{
    myspan.style.width = `calc(100%/ ${headtxt.length})`
    myspan.style.display = "inline-block"
    myspan.style.textAlign = "center"
})

