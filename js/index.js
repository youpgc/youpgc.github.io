var header = [
        {name: 'homepage', path: './home.html'},
        {name: 'theme', path: './theme.html'},
        {name: 'cool special', path: './cool-list.html'},
        {name: 'demo collection', path: './demo-list.html'},
        {name: 'about youpgc', path: './about.html'}
    ];

var headerDOM = '</div><a class="header-logo" href="https://youpgc.github.io">youpgc</a><ul class="header-link">';

for(var i=0; i<header.length; i++) {
    headerDOM += '<li><a href="'+header[i].path+'">'+header[i].name+'</a></li>';
}

headerDOM += '</ul>';

if(header.length == 0){
    window.location.href = '../404.html';
}
var headerTag = document.getElementsByTagName('header')[0];
headerTag ? headerTag.innerHTML = headerDOM : null;