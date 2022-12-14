window.onload = function () {
    let arr = []
    let a = document.getElementById("val1")
    let btn = document.getElementById("btnsub")
    btn.addEventListener("click", () => {
        arr.push(a.value)
        console.log(arr)
        document.getElementById("text").value = arr
    })
}