<?php

global $prev_text_color;
global $prev_primary_color;
global $prev_secondary_color;
global $prev_dark_color;
global $prev_accent_color;
global $prev_accent2_color;
global $prev_gray_color;
global $prev_light_gray_color;
global $prev_light_color;
global $prev_white_color;

function color_customize_register( $wp_customize ) {
    /* Just use the $wp_customize object and create a section or use a built-in
       section. */
    $wp_customize->add_section(
        'color_section',
        array(
            'title'       => __('Colors', fk-starterx),
            'priority'    => 30,
        )
    );

    // add color picker setting
    $wp_customize->add_setting( 'text_color', array(
        'default' => '#000000',
    ) );

    $wp_customize->add_setting( 'primary_color', array(
        'default' => '#926355',
    ) );

    $wp_customize->add_setting( 'secondary_color', array(
        'default' => '#BE8D7E',
    ) );

    $wp_customize->add_setting( 'dark_color', array(
        'default' => '#000000',
    ) );

    $wp_customize->add_setting( 'accent_color', array(
        'default' => '#333333',
    ) );

    $wp_customize->add_setting( 'accent2_color', array(
        'default' => '#666666',
    ) );

    $wp_customize->add_setting( 'gray_color', array(
        'default' => '#ABABAB',
    ) );

    $wp_customize->add_setting( 'light_gray_color', array(
        'default' => '#D6D6D6',
    ) );

    $wp_customize->add_setting( 'light_color', array(
        'default' => '#F0F0F0',
    ) );

    $wp_customize->add_setting( 'white_color', array(
        'default' => '#FFFFFF',
    ) );

    $wp_customize->add_setting( 'additional_customizer_text', array(
        'capability' => 'edit_theme_options',
        'default' => 'Lorem Ipsum',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( 'additional_customizer_text', array(
        'type' => 'text',
        'section' => 'color_section',
        'label' => __( 'If you want to see changes, please save colors first, and then reload the page.' ),
        'description' => __( 'Live preview does not work with colors & gutenberg' )
    ) );

    // add color picker control
    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'text_color', array(
        'label' => 'Text Color',
        'section' => 'color_section',
        'settings' => 'text_color',
    ) ) );

    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'primary_color', array(
        'label' => 'Primary Color',
        'section' => 'color_section',
        'settings' => 'primary_color',
    ) ) );

    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'secondary_color', array(
        'label' => 'Secondary Color',
        'section' => 'color_section',
        'settings' => 'secondary_color',
    ) ) );

    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'dark_color', array(
        'label' => 'Dark Color',
        'section' => 'color_section',
        'settings' => 'dark_color',
    ) ) );

    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'accent_color', array(
        'label' => 'Accent Color',
        'section' => 'color_section',
        'settings' => 'accent_color',
    ) ) );

    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'accent2_color', array(
        'label' => 'Second Accent Color',
        'section' => 'color_section',
        'settings' => 'accent2_color',
    ) ) );

    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'gray_color', array(
        'label' => 'Gray Color',
        'section' => 'color_section',
        'settings' => 'gray_color',
    ) ) );

    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'light_gray_color', array(
        'label' => 'Light Gray Color',
        'section' => 'color_section',
        'settings' => 'light_gray_color',
    ) ) );

    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'light_color', array(
        'label' => 'Light Color',
        'section' => 'color_section',
        'settings' => 'light_color',
    ) ) );

    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'white_color', array(
        'label' => 'White Color',
        'section' => 'color_section',
        'settings' => 'white_color',
    ) ) );

}
add_action( 'customize_register' , 'color_customize_register' );

function regen_colors_save() {

    global $prev_text_color;
    global $prev_primary_color;
    global $prev_secondary_color;
    global $prev_dark_color;
    global $prev_accent_color;
    global $prev_accent2_color;
    global $prev_gray_color;
    global $prev_light_gray_color;
    global $prev_light_color;
    global $prev_white_color;

    $prev_text_color = get_theme_mod('text_color');
    $prev_primary_color = get_theme_mod('primary_color');
    $prev_secondary_color = get_theme_mod('secondary_color');
    $prev_dark_color = get_theme_mod('dark_color');
    $prev_accent_color = get_theme_mod('accent_color');
    $prev_accent2_color = get_theme_mod('accent2_color');
    $prev_gray_color = get_theme_mod('gray_color');
    $prev_light_gray_color = get_theme_mod('light_gray_color');
    $prev_light_color = get_theme_mod('light_color');
    $prev_white_color = get_theme_mod('white_color');

}
add_action( 'customize_save' , 'regen_colors_save', 100 );

function regen_colors_after_save() {

    global $prev_text_color;
    global $prev_primary_color;
    global $prev_secondary_color;
    global $prev_dark_color;
    global $prev_accent_color;
    global $prev_accent2_color;
    global $prev_gray_color;
    global $prev_light_gray_color;
    global $prev_light_color;
    global $prev_white_color;

    $text_color = get_theme_mod('text_color', '#000000');
    $primary_color = get_theme_mod('primary_color', '#926355');
    $secondary_color = get_theme_mod('secondary_color', '#BE8D7E');
    $dark_color = get_theme_mod('dark_color', '#000000');
    $accent_color = get_theme_mod('accent_color', '#333333');
    $accent2_color = get_theme_mod('accent2_color', '#666666');
    $gray_color = get_theme_mod('gray_color', '#ABABAB');
    $light_gray_color = get_theme_mod('light_gray_color', '#D6D6D6');
    $light_color = get_theme_mod('light_color', '#F0F0F0');
    $white_color = get_theme_mod('white_color', '#FFFFFF');

    $file_content = '
        $text-color: '.$text_color.';
        $dark-tan: '.$primary_color.';
        $brandy-rose: '.$secondary_color.';
        $black: '.$dark_color.';
        $mine-shaft: '.$accent_color.';
        $steel: '.$accent2_color.';
        $gray-color: '.$gray_color.';
        $light-gray: '.$light_gray_color.';
        $gallery: '.$light_color.';
        $romance: '.$white_color.';';

    $scss_file = get_template_directory() . '/src/scss/0_settings/_colors.scss';
    file_put_contents($scss_file, $file_content);

    function replace_string_in_file($replace_old, $replace_new) {
        $file_path = get_template_directory() . '/build/css/main.css';
        $replace = file_get_contents($file_path);

        if(is_array($replace_old)) {
            for($i = 0; $i < count($replace_old); $i++) {
                $replace = str_replace($replace_old[$i], $replace_new[$i], $replace);
                file_put_contents($file_path, $replace); // overwrite
            }
        }
    }
    $old = array($prev_text_color, $prev_primary_color, $prev_secondary_color, $prev_dark_color, $prev_accent_color, $prev_accent2_color, $prev_gray_color, $prev_light_gray_color, $prev_light_color, $prev_white_color); // what to look for
    $new = array($text_color, $primary_color, $secondary_color, $dark_color, $accent_color, $accent2_color, $gray_color, $light_gray_color, $light_color, $white_color); // what to look for
    replace_string_in_file($old, $new);

}
add_action( 'customize_save_after' , 'regen_colors_after_save', 99 );

