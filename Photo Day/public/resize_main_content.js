
(function () {
    var element = document.querySelector('.main-content'),
        coefficient = 431 / 440,
        widthElement,
        heightElement;

    console.log(coefficient);
    console.log(element);
    resizeHeight();
    console.log(widthElement);
    function getStyle(elem) {
        return window.getComputedStyle ? getComputedStyle(elem, "") : elem.currentStyle;
    }

    window.onresize = function(){
        resizeHeight();

    }

    function resizeHeight() {
        widthElement = getStyle(element).width;
        console.log(element);
        console.log(widthElement);
        // if (439 < widthElement < 728){
        //     heightElement = Math.round(parseInt(widthElement) * coefficient) + "px";
        //     element.style.height = heightElement;
        // }
        // console.log(heightElement);

    }
})();
