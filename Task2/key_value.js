window.onload = function () {
    let counter = 1
    let arr = []
    let newobject = {}
    let a = document.getElementById("val1")
    let btn = document.getElementById("btnsub")
    btn.addEventListener("click", () => {
        newobject = {
            "key": counter++,
            "value": a.value,
        }
        arr.push(newobject)
        console.log(arr)
        document.getElementById("text").value = (arr)
    })
}