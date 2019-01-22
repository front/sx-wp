<?php
/**
 * Template Name: Landing Page
 *
 */

$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
Timber::render( array( 'page-landing.twig', 'page.twig' ), $context );
