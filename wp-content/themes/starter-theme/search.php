<?php
/**
 * The template for displaying search results pages.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package Under_Timber
 */

if ( ! class_exists( 'Timber' ) ) {
	echo 'Timber not activated. Make sure you activate the plugin in <a href="/wp-admin/plugins.php#timber">/wp-admin/plugins.php</a>';
	return;
}

$context = Timber::get_context();
$context['posts'] = new Timber\PostQuery();
$allsearch = new WP_Query("s=$s&showposts=0");
$context['posts_count'] = $allsearch ->found_posts;
Timber::render('search.twig', $context);
