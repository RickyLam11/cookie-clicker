function loadScript(url)
{    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.async = true;
    head.appendChild(script);
}

loadScript('./js/support.js')
loadScript('./js/cursorClass.js')
loadScript('./js/prestige.js')
loadScript('./js/gui.js')
loadScript('./js/save.js')
loadScript('./js/main.js')