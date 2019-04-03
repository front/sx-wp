<?php
$plugin = 'customizer-social-icons';
$base_path = get_template_directory_uri() . '/inc/customizer_social_icons';
$base_url  =  $base_path;
return array(
	'version' => implode( get_file_data( $base_path . $plugin . '.php', array( 'Stable Tag' ), 'plugin' ) ),
	'plugin_path' => $base_path,
	'plugin_url' => $base_url,
	'css_path' => $base_path . '/assets/css',
	'css_url' => $base_url . '/assets/css',
	'js_path' => $base_path . '/assets/js',
	'js_url' => $base_url . '/assets/js',
	'plugin_name' => $plugin,
	'prefix' => str_replace( '-', '_', $plugin ) . '_',
	'hide-text'   => true,
	'size'        => '2x',
	'type'        => 'icon',
	'li_class' => 'menu-social',
);
