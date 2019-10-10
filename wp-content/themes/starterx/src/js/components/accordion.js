import $ from 'jquery';

class Accordion {
    constructor() {
        this.block = $('.js-wp-block-cloudblocks-accordion');
        this.DURATION = 300;
        this.toggling = false;
    }

    handleOpenElementClick (event) {
        // prevent multiple clicks
        if (this.toggling) return;
        this.toggling = true;

        const openTriggerElement = $(event.currentTarget);
        const currentItem = openTriggerElement.parent();

        if (this.collapseOnChange) {
            const contents = this.block.find('.accordion__item-content');

            // collapse all items other than current
            contents.each((index, element) => {
                const elementParent = $(element).parent();

                if (!elementParent.is(currentItem)) {
                    $(element).slideUp(this.DURATION, () => {
                        elementParent.removeClass('accordion__item--open');
                        elementParent.find('.accordion__item-toggle-button').text('Open');
                    });
                }
            });
        }

        const contentToOpen = $(openTriggerElement.siblings()[0]);

        contentToOpen.slideToggle(this.DURATION, () => {
            currentItem.toggleClass('accordion__item--open');
            currentItem.find('.accordion__item-toggle-button').text(
                currentItem.hasClass('accordion__item--open') ?
                'Close' :
                'Open'
            );
            this.toggling = false;
        });
    }

    init() {
        try {
            this.collapseOnChange = this.block.data('collapse-on-change');
            this.openElement = this.block.find('.accordion__item-title-wrapper');

            this.openElement.on('click', (event) => { this.handleOpenElementClick(event); });
        } catch (e) {
            console.error(e);
        }
    }
}

export default Accordion;
