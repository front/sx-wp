class DarkColumns{

    constructor(){
        this.darkItems = document.querySelectorAll('.dark-item__text');
    }

    init(){
        this.darkItems.forEach(function (item, i, arr) {
            var computedStyle = getComputedStyle(item);
            var titleHeight = item.querySelector('.dark-item__title').clientHeight;
            var desc = item.querySelector('.dark-item__desc');
            var computedStyleDesc = getComputedStyle(desc);

            var elementHeight = item.clientHeight;
            elementHeight -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);

            var height = elementHeight - titleHeight - parseFloat(computedStyleDesc.paddingTop) - 50;

            desc.setAttribute('style', 'height:' + height + 'px');

        });
    }

}

export default DarkColumns;
