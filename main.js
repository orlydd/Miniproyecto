window.onscroll = function(event){
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
            document.querySelector("#back-to-top").classList.remove('ocultar');
        } else {
             document.querySelector("#back-to-top").classList.add('ocultar');
            }
}