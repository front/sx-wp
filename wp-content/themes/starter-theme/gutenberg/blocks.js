const { __ } = wp.i18n;

wp.blocks.registerBlockStyle('core/button', {
    name: 'dark',
    label: __('Squared Dark'),
});

wp.blocks.registerBlockStyle('core/button', {
    name: 'rounded',
    label: __('Rounded'),
});

wp.blocks.registerBlockStyle('core/button', {
    name: 'rounded-dark',
    label: __('Rounded Dark'),
});

wp.blocks.registerBlockStyle('core/button', {
    name: 'rounded-outline',
    label: __('Rounded Dark'),
});

// Add paragraph style option
wp.blocks.registerBlockStyle('core/paragraph', {
    name: 'flarge',
    label: __('Large'),
});
wp.blocks.registerBlockStyle('core/paragraph', {
    name: 'fnormal',
    label: __('Normal'),
});
wp.blocks.registerBlockStyle('core/paragraph', {
    name: 'fsmall',
    label: __('Small'),
});
wp.blocks.registerBlockStyle('core/paragraph', {
    name: 'fxsmall',
    label: __('Extra small'),
});


// Add headings visually hidden option
wp.blocks.registerBlockStyle('core/heading', {
    name: 'visuallyhidden',
    label: __('Visually Hidden'),
});

var ostfold = (function () {
    'use strict';

    function adjustBlockStyles(settings, name) {
        switch (name) {
            case 'core/quote':
                return removeStyles(settings, ['large']);
            case 'core/button':
                setDefaultLabel(settings, 'Squared');
                return removeStyles(settings, ['squared']);
            default:
                return settings;
        }
    }

    function setDefaultLabel(settings, newLabel) {
        settings['styles'] = settings['styles'].map(function (style) {
            if (style.isDefault) style.label = newLabel;
            return style;
        });
    }

    function removeStyles(settings, styles) {
        settings['styles'] = settings['styles'].filter(function (style) {
            return styles.indexOf(style.name) === -1;
        });
        return settings;
    }

    return {
        adjustBlockStyles: adjustBlockStyles
    };

}());

wp.hooks.addFilter(
    'blocks.registerBlockType',
    'ostfold/editor',
    ostfold.adjustBlockStyles
);
