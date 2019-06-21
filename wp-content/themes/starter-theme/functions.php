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
        $context['additional_mobile_menu'] = new TimberMenu( 'mobile' );
        $context['social_menu'] = new TimberMenu( 'social' );
		$context['site'] = $this;
        $context['footer1'] = Timber::get_widgets('footer-1');
        $context['footer2'] = Timber::get_widgets('footer-2');
        $context['footer3'] = Timber::get_widgets('footer-3');
        $context['footer4'] = Timber::get_widgets('footer-4');
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

    /*
     * Enable support for Custom Logo.
     *
     * @link https://developer.wordpress.org/themes/functionality/custom-logo/
     */
    add_theme_support( 'custom-logo' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'top' => esc_html__( 'Top Menu', '_t' ),
		'main' => esc_html__( 'Main Menu', '_t' ),
//		'full' => esc_html__( 'Expandable Menu', '_t' ),
//        'social' => esc_html__( 'Social Menu', '_t' ),
        'mobile' => esc_html__( 'Additional Mobile Menu', '_t' ),
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
    register_sidebar( array(
        'name'          => __( 'Footer 1', '_t' ),
        'id'            => 'footer-1',
        'description'   => __( 'Widgets in this area will be shown on all posts and pages.', '_t' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget__title">',
        'after_title'   => '</h2>',
    ) );

    register_sidebar( array(
        'name'          => __( 'Footer 2', '_t' ),
        'id'            => 'footer-2',
        'description'   => __( 'Widgets in this area will be shown on all posts and pages.', '_t' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget__title">',
        'after_title'   => '</h2>',
    ) );

    register_sidebar( array(
        'name'          => __( 'Footer 3', '_t' ),
        'id'            => 'footer-3',
        'description'   => __( 'Widgets in this area will be shown on all posts and pages.', '_t' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget__title">',
        'after_title'   => '</h2>',
    ) );

    register_sidebar( array(
        'name'          => __( 'Footer 4', '_t' ),
        'id'            => 'footer-4',
        'description'   => __( 'Widgets in this area will be shown on all posts and pages.', '_t' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget__title">',
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
 * Implement the Custom Colors feature.
 */
require get_template_directory() . '/inc/custom-colors.php';

/**
 * Implement the Custom Colors feature.
 */
require get_template_directory() . '/inc/custom-footer.php';


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

/**
 * Load Gutenberg settings file.
 */
require get_template_directory() . '/gutenberg/gutenberg.php';

/**
 * Remove the additional CSS section, introduced in 4.7, from the Customizer.
 * @param $wp_customize WP_Customize_Manager
 */
function prefix_remove_css_section( $wp_customize ) {
    $wp_customize->remove_section( 'custom_css' );
}
add_action( 'customize_register', 'prefix_remove_css_section', 15 );

/**
 * This function adds some styles to the WordPress Customizer
 */
function my_customizer_styles() { ?>
    <style>
        #_customize-input-additional_customizer_text {
            display: none;
        }
    </style>
    <?php

}
add_action( 'customize_controls_print_styles', 'my_customizer_styles', 999 );

// social menu
//require get_template_directory() . '/inc/customizer_social_icons/customizer-social-icons.php';

/**
 * Adds the meta box to the page screen
 */
function theme_options_add_meta_box() {
	$screens = array( 'post', 'page' );
	add_meta_box(
		'theme_options',
		__( 'Theme options' ),
		'options_meta_box',
		$screens,
		'side',
		'low'
	);
}

add_action( 'add_meta_boxes', 'theme_options_add_meta_box' );

function options_meta_box( $post, $meta ) {
	wp_nonce_field( plugin_basename( __FILE__ ), 'title_nonce' );
	$title_status = get_post_meta( $post->ID, '_show_title', true );

	if ( $title_status === '' || ! empty( $title_status ) ) {
		$checkbox_status = 'checked';
	} else {
		$checkbox_status = '';
	}
	?>

    <div class="components-base-control components-base-control--mt">
        <p class="post-attributes-label-wrapper"></p>
        <div class="components-base-control__field">
            <input id="show_title" class="components-checkbox-control__input" name="show_title" type="checkbox" <?php echo $checkbox_status ?>>
            <label class="components-checkbox-control__label" for="show_title">Show title</label>
        </div>
    </div>
	<?php

}

function show_title_save_postdata( $post_id ) {
	$is_checked = 0;

	if ( ! wp_verify_nonce( $_POST['title_nonce'], plugin_basename( __FILE__ ) ) ) {
		return;
	}
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}
	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}
	if ( isset( $_POST['show_title'] ) ) {
		$is_checked = $_POST['show_title'];
	}

	update_post_meta( $post_id, '_show_title', $is_checked );
}

add_action( 'save_post', 'show_title_save_postdata' );

/**
 * add svg support
 */

function svg_support( $m ) {
	$m['svg']  = 'image/svg+xml';
	$m['svgz'] = 'image/svg+xml';

	return $m;
}

add_filter( 'upload_mimes', 'svg_support' );


///**
// * require composer autoload
// */
//
//require get_template_directory() . '/vendor/autoload.php';
//
///**
// * for xdebugging twig
// */
//
//add_filter( 'timber/twig', function( \Twig\Environment $twig ) {
//    if ( defined( 'WP_DEBUG' ) && WP_DEBUG
//        && class_exists( 'Ajgl\Twig\Extension\BreakpointExtension' )
//    ) {
//        $twig->addExtension( new Ajgl\Twig\Extension\BreakpointExtension() );
//    }
//
//    return $twig;
//} );