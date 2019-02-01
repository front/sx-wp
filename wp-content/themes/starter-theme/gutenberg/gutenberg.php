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
          'name' => __( 'Brandy Rose', '_t' ),
          'slug' => 'starter-brandy-rose',
          'color' => '#BE8D7E',
      ),
      array(
          'name' => __( 'Dark Tan', '_t' ),
          'slug' => 'starter-dark-tak',
          'color' => '#996152',
      ),
      array(
          'name' => __( 'Black', '_t' ),
          'slug' => 'starter-black',
          'color' => '#000000',
      ),
      array(
          'name' => __( 'Mine Shaft', '_t' ),
          'slug' => 'starter-mine-shaft',
          'color' => '#333333',
      ),
      array(
          'name' => __( 'Steel', '_t' ),
          'slug' => 'starter-steel',
          'color' => '#666666',
      ),
      array(
          'name' => __( 'Light Gray', '_t' ),
          'slug' => 'starter-light-gray',
          'color' => '#D6D6D6',
      ),
      array(
          'name' => __( 'Gallery', '_t' ),
          'slug' => 'starter-gallery',
          'color' => '#F0F0F0',
      ),

      array(
          'name' => __( 'Romance', '_t' ),
          'slug' => 'starter-romance',
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

/**
 * Enqueue css file for gutenberg override
 */
function custom_gutenberg_styles() {

    wp_enqueue_style( 'g-editor-style', get_stylesheet_directory_uri() . '/build/css/main.css', array(), '1.0' );

}
add_action( 'enqueue_block_editor_assets', 'custom_gutenberg_styles' );
