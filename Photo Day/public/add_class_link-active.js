(function(){
    var selectedLink = document.getElementsByClassName("pages__link")[0],
        pageNext = document.getElementsByClassName("pages__link")[4],
        pages = document.getElementsByClassName("pages")[0],
        pagesLinkCollection = document.getElementsByClassName('pages__link'),
        //Делаем из коллекции массив, т.к. в коллекции не работают методы массивов
        pagesLinkArray = Array.prototype.slice.call(pagesLinkCollection, 0),
        numberSelectedLink = pagesLinkArray.indexOf(selectedLink);

    //Добавляем первому элементу класс active-link
    selectedLink.classList.add('active-link');


    pages.onclick = function(event) {
        event = event || window.event; //Кроссбраузерно
        var target = event.target || event.srcElement;  // где был клик? Кроссбраузерно

        if (target === pageNext) {
            setNextPageAndClassDisabled();
            return;
        }
        addClassActiveLink(target);
    }


    function addClassActiveLink(node) {
        if (selectedLink) {
            selectedLink.classList.remove('active-link');
        }
        selectedLink = node;
        numberSelectedLink = pagesLinkArray.indexOf(selectedLink);
        selectedLink.classList.add('active-link');
        if (numberSelectedLink === pagesLinkArray.length-2){
            pageNext.classList.add('disabled-link');
        }
        checkAndRemoveClassDisabled();
    }


    function setNextPageAndClassDisabled() {
        numberSelectedLink++;
        var nodeNext = pagesLinkArray[numberSelectedLink];
        addClassActiveLink(nodeNext);
        if (numberSelectedLink === pagesLinkArray.length-2){
            pageNext.classList.add('disabled-link');
        }
        checkAndRemoveClassDisabled();
    }


    function checkAndRemoveClassDisabled() {
        if (pageNext.classList.contains('disabled-link') && numberSelectedLink < pagesLinkArray.length - 2) {
            pageNext.classList.remove('disabled-link');
        }
    }
})();