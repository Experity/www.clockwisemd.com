adroll_adv_id = "VIMQRMPQ2ZHV3L4NC7LFM4";
adroll_pix_id = "GR6R3JVVHNBLVC5FGKOZ4A";
(function () {
    var _onload = function(){
        if (document.readyState && !/loaded|complete/.test(document.readyState)){setTimeout(_onload, 10);return}
        if (!window.__adroll_loaded){__adroll_loaded=true;setTimeout(_onload, 50);return}
        var scr = document.createElement("script");
        var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");
        scr.setAttribute('async', 'true');
        scr.type = "text/javascript";
        scr.src = host + "/j/roundtrip.js";
        ((document.getElementsByTagName('head') || [null])[0] ||
            document.getElementsByTagName('script')[0].parentNode).appendChild(scr);
    };
    if (window.addEventListener) {window.addEventListener('load', _onload, false);}
    else {window.attachEvent('onload', _onload)}
}());
