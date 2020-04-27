var demoRouter = [
    {
        path: 'demo/snake',
        name: '贪吃蛇',
    },
    {
        path: 'demo/indexedDB',
        name: 'indexedDB的应用'
    }
]

var initPage = function(curr, limit){
    var begin = (curr - 1) * limit;
    var end = limit * curr - 1;
    if(end > demoRouter.length){
        end = demoRouter.length;
    }
    var list = demoRouter.slice(begin, end);
    var html =  '';
    for(var i=0; i<list.length; i++) {
        html += '<div class="currnt-item"><a href="../'+list[i].path+'.html">'+list[i].name+'</a></div>';
    }
    if(list.length==0) {
        html += '<div>啊哦，暂时没有更新！</div>';
    }
    window.document.getElementById('demo-list').innerHTML = html;
}