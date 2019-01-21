<?php
/**
 * Under Timber functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Under_Timber
 */

if ( ! class_exists( 'Timber' ) ) {
	add_action( 'admin_notices', function() {
		echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php' ) ) . '</a></p></div>';
	} );
	return;
}

Timber::$dirname = array('templates', 'template-parts');

class UnderTimberSite extends TimberSite {
	/**
	 * @inheritDoc
	 */
	public function __construct() {
		add_filter( 'timber_context', array( $this, 'add_to_context' ) );
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );
		parent::__construct();
	}

	/**
	 * Register custom post types.
	 */
	function register_post_types() {
	}

	/**
	 * Register custom taxonomies.
	 */
	function register_taxonomies() {
	}

	/**
	 * Add values to the universal Timber context.
	 *
	 * @param array $context
	 *
	 * @return array $context
	 */
	function add_to_context($context) {
		$context['menu'] = new TimberMenu();
		$context['top_menu'] = new TimberMenu( 'top' );
		$context['main_menu'] = new TimberMenu( 'main' );
		$context['full_menu'] = new TimberMenu( 'full' );
		$context['site'] = $this;
		return $context;
	}
}

new UnderTimberSite();

if ( ! function_exists( '_t_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function _t_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on Under Timber, use a find and replace
	 * to change '_t' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( '_t', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'top' => esc_html__( 'Top Menu', '_t' ),
		'main' => esc_html__( 'Main Menu', '_t' ),
		'full' => esc_html__( 'Expandable Menu', '_t' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 * See https://developer.wordpress.org/themes/functionality/post-formats/
	 */
	add_theme_support( 'post-formats', array(
		'aside',
		'image',
		'video',
		'quote',
		'link',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( '_t_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );
}
endif;
add_action( 'after_setup_theme', '_t_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function _t_content_width() {
	$GLOBALS['content_width'] = apply_filters( '_t_content_width', 640 );
}
add_action( 'after_setup_theme', '_t_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function _t_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', '_t' ),
		'id'            => 'sidebar-1',
		'description'   => '',
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', '_t_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function _t_scripts() {
	wp_enqueue_style( '_t-style', get_stylesheet_uri() );

	wp_enqueue_script( '_t-scripts', get_template_directory_uri() . '/build/js/main.js', array('jquery'), '20190121', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', '_t_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';
