let gen = document.getElementById("gen")
let pass = document.getElementById("pass")
let leng = 12
let password = ""
let ran = "qwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()_+~?="
let copy = document.getElementById("copy")
let copiedsBox = document.getElementById("copiedsbox")
let copiedBox = document.getElementById("copiedbox")
let defaultTxt = document.getElementById("defaultTxt")
let default_ = copiedsBox.innerHTML
let closeBtn = document.getElementById("closeBtn")
let i = 0
console.log(i)
let p = 0


/// getting data from local storage
i = parseInt(localStorage.getItem("iValue"))
if (isNaN(i)) {
    i = 0
    defaultTxt.innerHTML = "No Copied Passwords"
} else {
    default_ = localStorage.getItem("appendedTxt")
    console.log(default_)
    copiedsBox.innerHTML = default_
    while (p < i) {
        p = p + 1
        xyz(p)
    }
}




///functions 
function xyz(a) {
    var b = ".btn" + a
    var v = document.querySelector(b)
    console.log(a)
    v.addEventListener("click", function () {
        navigator.clipboard.writeText(v.previousSibling.innerHTML)
    })
}
function ranpass() {
    if (password.length == 12) {
        password = ""
        while (password.length < 12) {
            password = password + ran[Math.floor(Math.random() * 51)]
        }
    } else {
        while (password.length < 12) {
            password = password + ran[Math.floor(Math.random() * 51)]
        }
    }
    pass.value = password

}
function copytxt() {
    if ((password == "") == false) {
        navigator.clipboard.writeText(password)
        i++
        var x = document.createElement("div")
        copiedsBox.appendChild(x)
        var y = document.createElement("p")
        y.innerHTML = password
        var z = document.createElement("button")
        z.innerHTML = "copy"
        z.classList.add("btn" + i)
        x.appendChild(y)
        x.appendChild(z)
        defaultTxt.remove()
        localStorage.setItem("appendedTxt", copiedsBox.innerHTML)
        console.log(i)
        localStorage.setItem("iValue", i)
        xyz(i)
    }
}







///// copied passwords
closeBtn.addEventListener("click", function () {
    copiedBox.classList.add("remove")
})
copy.addEventListener("click", function () {
    copiedBox.classList.remove("remove")
})








console.log("last line")