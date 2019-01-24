import { blocks, data, i18n } from 'wp';
const { registerBlockType } = blocks;
const { dispatch, select } = data;
const { __ } = i18n;

import * as block1 from './card/index';

// Category name and slug
const category = {
  slug: 'cloudblocks', // needs to match the css class of the block container: ".wp-block-cloudblocks-[block-name]"
  title: __('Cloud Blocks'),
};

// Register the new category and blocks
export function registerBlocks () {
  // Add the new category to the list
  const currentCategories = select('core/blocks')
  .getCategories()
  .filter(item => item.slug !== category.slug);
  dispatch('core/blocks').setCategories([category, ...currentCategories]);

  registerBlockType(`${category.slug}/${block1.name}`, {
    category: category.slug,
    ...block1.settings,
  });
}

registerBlocks();
