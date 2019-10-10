<?php
/**
 * The sidebar containing the main widget area.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Under_Timber
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}

Timber::render( array( 'sidebar.twig' ), $data );
