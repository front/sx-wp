<?php
/**
 * The template for displaying all single posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Under_Timber
 */

if ( ! class_exists( 'Timber' ) ) {
	echo 'Timber not activated. Make sure you activate the plugin in <a href="/wp-admin/plugins.php#timber">/wp-admin/plugins.php</a>';
	return;
}

$context = Timber::get_context();
$context['posts'] = Timber::get_posts();

// get related posts
$context['category'] = $context['posts'][0]->category;
$post_id = $context['posts'][0]->ID;
$category_id = $context['category']->ID;

$args = array(
	'posts_per_page'    => 4,
	'offset'            => 0,
	'cat'               => '',
	'category_name'     => '',
	'orderby'           => 'date',
	'order'             => 'DESC',
	'include'           => '',
	'exclude'           => $post_id,
	'meta_key'          => '',
	'meta_value'        => '',
	'post_type'         => 'post',
	'post_mime_type'    => '',
	'post_parent'       => '',
	'author'	        => '',
	'author_name'	    => '',
	'post_status'       => 'publish',
	'suppress_filters'  => true,
	'fields'            => '',
);
$posts_in_category = get_posts( $args );
$context['posts_in_category'] = get_posts( $args );

Timber::render('single.twig', $context);
