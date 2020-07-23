(function(){
    var elements = document.querySelectorAll('[data-tw-bind]'),
        scope = {};

        elements.forEach(function(element){
            //execute scope setter
            if(element.type === 'text' || element.type === 'textarea'){
                var propToBind = element.getAttribute('data-tw-bind');
                element.onkeyup = function(){
                    scope[propToBind] = element.value;
                }
            }
        })
     

})();