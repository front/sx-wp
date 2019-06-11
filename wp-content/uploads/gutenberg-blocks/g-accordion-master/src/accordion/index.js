import React from 'react';
import { i18n } from 'wp';

import './style.scss';
import Edit from './Edit';
import Save from './Save';

const BLOCK_ATTRIBUTES = {
    collapseItemsOnChange: {
        type: 'boolean',
        default: false
    },
    items: {
        type: 'array',
        default: []
    }
};

export const name = 'g-accordion';

export const settings = {
  title: __('Accordion'),

  description: __('A custom block for Gutenberg Cloud'),

  icon: 'cover-image',

  attributes: BLOCK_ATTRIBUTES,

  edit ({ attributes, className, setAttributes }) {
      const classes = [
          className,
          'wp-block-cloudblocks-accordion',
          'edit'
      ].filter(className => !!className).join(' ');

      return <Edit settings={{ attributes, classes, setAttributes }} />;
  },

  save ({ attributes, className }) {
    const classes = [
        className,
        'wp-block-cloudblocks-accordion',
        'js-wp-block-cloudblocks-accordion',
        'save'
    ].filter(className => !!className).join(' ');

    return <Save settings={{ attributes, classes }} />;
  },
};
