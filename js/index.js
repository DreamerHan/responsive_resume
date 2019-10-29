var skillLeft = document.querySelectorAll('.skill_list .left')
var skillRightEm = document.querySelectorAll('.skill_list .right em')

var emWidths = []

Array.from(skillLeft).forEach(item => {
    emWidths.push(item.innerText)
})

for (var i = 0; i < skillLeft.length; i++) {
    skillRightEm[i].style.width = emWidths[i];
}




var casePartLi = document.querySelectorAll('.case_list .list_item')
var caseH3 = document.querySelectorAll('.case_list h3')
var caseUl = document.querySelectorAll('.case_list ul')
var caseLi = document.querySelectorAll('.case_list ul li')
var caseContentLi = document.querySelectorAll('.case_list_content li')

var caseJs = {
    init: function(num) {
        casePartLi[num].className += ' opened';
        caseUl[num].style.display = 'block';
        caseLi[num].className = 'chosed';
        caseLi[num].className = 'chosed';
        caseContentLi[num].style.display = 'block';
    },
    partTab: function() {
        for (var i = 0; i < caseH3.length; i++) {
            caseH3[i].index = i;

            caseH3[i].onclick = function() {
                for (var i = 0; i < caseH3.length; i++) {
                    casePartLi[i].className = 'list_item';
                    if (caseUl[i]) {
                        caseUl[i].style.display = 'none'
                    }
                }
                casePartLi[this.index].className += ' opened'
                if (caseUl[this.index]) {
                    caseUl[this.index].style.display = 'block'

                }
            }
        }
    },
    caseTab: function() {
        for (var i = 0; i < caseLi.length; i++) {
            caseLi[i].index = i;
            caseLi[i].onclick = function() {
                for (var i = 0; i < caseLi.length; i++) {
                    caseLi[i].className = ''
                    caseContentLi[i].style.display = 'none'
                }
                this.className = 'chosed'
                caseContentLi[this.index].style.display = 'block'
            }
        }
    }
}
caseJs.partTab();
caseJs.caseTab();
caseJs.init(0);