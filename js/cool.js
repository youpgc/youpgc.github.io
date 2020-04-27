var coolRouter = [
    {
        path: 'cool/520',
        name: '表白粒子',
    },
    {
        path: 'cool/nest',
        name: '博客页面点击特效'
    },
    {
        path: '404',
        name: '404 Rolling Box'
    }
]

var initPage = function(curr, limit){
    var begin = (curr - 1) * limit;
    var end = limit * curr - 1;
    if(end > coolRouter.length){
        end = coolRouter.length;
    }
    var list = coolRouter.slice(begin, end);
    var html =  '';
    for(var i=0; i<list.length; i++) {
        html += '<div class="currnt-item"><a href="../'+list[i].path+'.html">'+list[i].name+'</a></div>';
    }
    if(list.length==0) {
        html += '<div>啊哦，暂时没有更新！</div>';
    }
    window.document.getElementById('cool-list').innerHTML = html;
}