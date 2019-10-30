var skillLeft = document.querySelectorAll('.skill_list .left')
var skillRightEm = document.querySelectorAll('.skill_list .right em')

var emWidths = []

Array.from(skillLeft).forEach(item => {
    emWidths.push(item.innerText)
})

for (var i = 0; i < skillLeft.length; i++) {
    skillRightEm[i].style.width = emWidths[i];
}



var caseListContent = document.querySelector('.case_list_content')
var casePartLi = document.querySelectorAll('.case_list .list_item')
var caseH3 = document.querySelectorAll('.case_list h3')
var caseUl = document.querySelectorAll('.case_list ul')
var caseLi = document.querySelectorAll('.case_list ul li')

var caseContentUl = document.querySelector('.case_list_content ul')
var caseContentLi = document.querySelectorAll('.case_list_content li')


var backNav = document.querySelector('.case_list_content .nav')
var backArrow = document.querySelector('.case_list_content .nav a')

var caseJs = {
    init: function(num) {
        casePartLi[num].className += ' opened';
        caseUl[num].style.display = 'block';
        caseContentLi[num].style.display = 'block';
        if (getSize() == 'pc') {
            caseLi[num].className = 'chosed';

        }
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
                if (getSize() == 'm') {
                    caseListContent.style.transform = `translateX(0vw)`;
                }
            }
        }
    },
    clickBack: function() {
        backArrow.onclick = function() {
            caseListContent.style.transform = `translateX(100vw)`;
        }
    }
}

caseJs.partTab();
caseJs.caseTab();
caseJs.init(0);
caseJs.clickBack()


getSize();

function getSize() { //获取屏幕宽度来判断是移动端还是PC
    var deviceWidth = window.innerWidth || document.documentElement.clientWidth;

    if (deviceWidth < 960) {
        return 'm'
    } else {
        return 'pc'
    }
}

//caseListContent弹层在移动端的滑动
(function() {
    var startPoint = 0,
        nowPoint = 0,
        scroll = 0,
        beforeMove = 0;

    caseContentUl.addEventListener('touchstart', function(e) {
        startPoint = e.changedTouches[0].pageY
    }, false)

    caseContentUl.addEventListener('touchmove', function(e) {
        //解决iPad横屏后屏幕宽大于960时导致的阻止事件冒泡试得浏览器不能滑动的情况
        if (getSize() == 'pc') {
            return
        }

        e.preventDefault() //阻止事件冒泡，导致遮挡住的父页面也在滑动

        nowPoint = e.changedTouches[0].pageY
        scroll = nowPoint - startPoint;

        var scrollDis = beforeMove + scroll

        if (scrollDis > 0) {
            scrollDis = 0;
        }

        var maxScrollTop = window.innerHeight - backNav.offsetHeight - caseContentUl.offsetHeight

        if (scrollDis < maxScrollTop) {
            scrollDis = maxScrollTop
        }
        caseContentUl.style.top = scrollDis + 'px';

    }, false)

    caseContentUl.addEventListener('touchmove', function(e) {
        beforeMove += scroll //保存已经滑动的距离
    })
})()

//解决小屏点击backArrow后，切换到大屏，层不存在的效果
window.onresize = function() {
    if (getSize() == 'pc') {
        caseListContent.style.transform = `translateX(0vw)`;
    } else {
        caseListContent.style.transform = `translateX(100vw)`;
    }
}