/**
 * Created by lenovo on 2017/10/23.
 */
// 轮播图

var oContainer = document.getElementById('container');
var oTabs = document.getElementById('tabs');
var oImgs = document.getElementById('imgs');
var aLi = oTabs.children;
var aImgs = oImgs.children;
var oNext = document.getElementById('next');
var oPrev = document.getElementById('prev');
var index = 0;

for(var i=0;i<aLi.length;i++){
    aLi[i].index = i;
    aLi[i].onmouseover = function () {
        index = this.index;
        changeImg(this);
    }
}

function changeImg(elem) {
    for(var i=0;i<aLi.length;i++){
        aLi[i].className = '';
        aImgs[i].className = '';
    }
    elem.className = 'selected';
    aImgs[elem.index].className = 'selected';
}

oNext.onclick = function () {
    index++;
    if(index == aLi.length){
        index = 0;
    }
    changeImg(aLi[index]);
};

oPrev.onclick = function () {
    index--;
    if(index == -1){
        index = aLi.length - 1;
    }
    changeImg(aLi[index]);
};

var timer;
function run() {
    timer = setInterval(function () {
        oNext.onclick();
    },2000);
}
run();

oContainer.onmouseover = function () {
    clearInterval(timer);
};
oContainer.onmouseout = function () {
    run();
};
