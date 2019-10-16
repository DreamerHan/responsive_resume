var ems = document.querySelectorAll('.skill_list em')
var spans = document.querySelectorAll('.skill_list li>span')

var arr = []
Array.from(spans).map(obj => {
    arr.push(obj.innerHTML)
})

for (var i = 0; i < ems.length; i++) {
    ems[i].style.width = arr[i]
}