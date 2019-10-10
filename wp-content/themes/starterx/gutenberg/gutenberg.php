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
          'name' => __( 'Brandy Rose', fk-starterx ),
          'slug' => 'starter-brandy-rose',
          'color' => get_theme_mod('secondary_color', '#BE8D7E'),
      ),
      array(
          'name' => __( 'Dark Tan', fk-starterx ),
          'slug' => 'starter-dark-tak',
          'color' => get_theme_mod('primary_color', '#926355'),
      ),
      array(
          'name' => __( 'Black', fk-starterx ),
          'slug' => 'starter-black',
          'color' => get_theme_mod('dark_color', '#000000'),
      ),
      array(
          'name' => __( 'Mine Shaft', fk-starterx ),
          'slug' => 'starter-mine-shaft',
          'color' => get_theme_mod('accent_color', '#333333'),
      ),
      array(
          'name' => __( 'Steel', fk-starterx ),
          'slug' => 'starter-steel',
          'color' => get_theme_mod('accent2_color', '#666666'),
      ),
      array(
          'name' => __( 'Gray', fk-starterx ),
          'slug' => 'starter-gray',
          'color' => get_theme_mod('gray_color', '#ABABAB'),
      ),
      array(
          'name' => __( 'Light Gray', fk-starterx ),
          'slug' => 'starter-light-gray',
          'color' => get_theme_mod('light_gray_color', '#D6D6D6'),
      ),
      array(
          'name' => __( 'Gallery', fk-starterx ),
          'slug' => 'starter-gallery',
          'color' => get_theme_mod('light_color', '#F0F0F0'),
      ),

      array(
          'name' => __( 'Romance', fk-starterx ),
          'slug' => 'starter-romance',
          'color' => get_theme_mod('white_color', '#FFFFFF'),
      ),
  ) );
  add_theme_support( 'disable-custom-colors' );

  // Width
  add_theme_support( 'align-wide' );
  add_theme_support( 'align-full' );

  // Font sizes
  add_theme_support( 'editor-font-sizes', array(
      array(
          'name' => __( 'Extra small', fk-starterx ),
          'size' => 14,
          'slug' => 'xsmall'
      ),
      array(
          'name' => __( 'Small', fk-starterx ),
          'size' => 16,
          'slug' => 'small'
      ),
      array(
          'name' => __( 'Normal', fk-starterx ),
          'size' => 18,
          'slug' => 'normal'
      ),
      array(
          'name' => __( 'Large', fk-starterx ),
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
