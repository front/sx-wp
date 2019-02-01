<?php

/**
 * Add some gutenberg theme supports
 * such as color palette, custom font sizes and etc
 */
add_action( 'after_setup_theme', 'fk_add_theme_support' );
function fk_add_theme_support() {
  // Color palette
  add_theme_support( 'editor-color-palette', array(
      array(
          'name' => __( 'red', '_t' ),
          'slug' => 'starter-red',
          'color' => '#F0192A',
      ),
      array(
          'name' => __( 'dark blue', '_t' ),
          'slug' => 'starter-dark-blue',
          'color' => '#2622B4',
      ),
      array(
          'name' => __( 'blue', '_t' ),
          'slug' => 'starter-blue',
          'color' => '#2C27CE',
      ),
      array(
          'name' => __( 'cyan', '_t' ),
          'slug' => 'starter-cyan',
          'color' => '#16B1FF',
      ),
      array(
          'name' => __( 'green', '_t' ),
          'slug' => 'starter-green',
          'color' => '#5B7A5C',
      ),
      array(
          'name' => __( 'faded black', '_t' ),
          'slug' => 'starter-black',
          'color' => 'rgba(0, 0, 0, 0.33)',
      ),
      array(
          'name' => __( 'gray', '_t' ),
          'slug' => 'starter-gray',
          'color' => '#ABABAB',
      ),
      array(
          'name' => __( 'sand', '_t' ),
          'slug' => 'starter-sand',
          'color' => '#EAE8E2',
      ),
      array(
          'name' => __( 'white', '_t' ),
          'slug' => 'starter-white',
          'color' => '#ffffff',
      ),
  ) );
  add_theme_support( 'disable-custom-colors' );

  // Width
  add_theme_support( 'align-wide' );
  add_theme_support( 'align-full' );

  // Font sizes
  add_theme_support( 'editor-font-sizes', array(
      array(
          'name' => __( 'Extra small', '_t' ),
          'size' => 14,
          'slug' => 'xsmall'
      ),
      array(
          'name' => __( 'Small', '_t' ),
          'size' => 16,
          'slug' => 'small'
      ),
      array(
          'name' => __( 'Normal', '_t' ),
          'size' => 18,
          'slug' => 'normal'
      ),
      array(
          'name' => __( 'Large', '_t' ),
          'size' => 24,
          'slug' => 'large'
      ),
  ) );
  add_theme_support( 'disable-custom-font-sizes' );

  // Styles
  add_theme_support( 'editor-styles' );

  // Media
  add_theme_support( 'responsive-embeds' );
}

/**
 * Enqueue js file for gutenberg changes
 */
function gutenberg_blocks_modification_enqueue() {
    wp_enqueue_script(
        'global-blocks-script',
        get_stylesheet_directory_uri() . '/gutenberg/blocks.js',
        array( 'wp-blocks', 'wp-element', 'wp-components', 'wp-i18n', 'wp-dom' ,'wp-dom-ready' )
    );
}
add_action( 'enqueue_block_editor_assets', 'gutenberg_blocks_modification_enqueue' );
