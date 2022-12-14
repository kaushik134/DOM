// let a = document.getElementById("val1")
// let b = document.getElementById("val2")
// let btn = document.getElementById("btnsub")
// btn.addEventListener("click",()=>{
//     console.log("hello")
//     console.log("A + B = ",a+b)
// })


window.onload = function () {
    let a = document.getElementById("val1")
    let b = document.getElementById("val2")
    let btn = document.getElementById("btnsub")
    btn = addEventListener("click", () => {
        console.log(`${val1} and ${val2}`)
        let ans = +val1.value + +val2.value
        document.getElementById("sum").value = ans
    })
}