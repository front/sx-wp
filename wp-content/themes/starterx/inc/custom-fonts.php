<?php

function starterx_fonts_customizer( $wp_customize ) {

    $wp_customize->add_section(
        'font_section',
        array(
            'title'       => __( 'Fonts', 'starterx' ),
            'priority'    => 30,
        )
    );

    $wp_customize->add_setting(
        'starterx_body_fonts',
        array(
            'default'    => '',
            'type'       => 'option',
            'capability' => 'edit_theme_options',
        )
    );

    $wp_customize->add_control(
        'starterx_body_fonts',
        array(
            'type' => 'select',
            'description' => __( 'Select your desired font for the website.', 'starterx' ),
            'section' => 'font_section',
            'choices' => starterx_google_fonts_list()
        )
    );

    $wp_customize->add_setting(
        'starterx_headings_fonts',
        array(
            'default'    => '',
            'type'       => 'option',
            'capability' => 'edit_theme_options',
        )
    );

    $wp_customize->add_control(
        'starterx_headings_fonts',
        array(
            'type' => 'select',
            'description' => __('Select your desired font for the headings.', 'starterx'),
            'section' => 'font_section',
            'choices' => starterx_google_fonts_list()
        )
    );

    $wp_customize->add_setting(
        'starterx_paragraph_fonts',
        array(
            'default'    => '',
            'type'       => 'option',
            'capability' => 'edit_theme_options',
        )
    );

    $wp_customize->add_control(
        'starterx_paragraph_fonts',
        array(
            'type' => 'select',
            'description' => __( 'Select your desired font for the paragraphs.', 'starterx' ),
            'section' => 'font_section',
            'choices' => starterx_google_fonts_list()
        )
    );
}
add_action('customize_register', 'starterx_fonts_customizer');

function starterx_custom_styles($custom) {

    //Fonts
    $headings_font = get_option('starterx_headings_fonts');
    $body_font = get_option('starterx_body_fonts');
    $paragraph_font = get_option('starterx_paragraph_fonts');

    if ( $body_font ) {
        $font_pieces = explode(":", $body_font);
        $custom .= "body, body * { font-family: {$font_pieces[0]}!important; }"."\n";
    }

    if ( $headings_font ) {
        $font_pieces = explode(":", $headings_font);
        $custom .= "h1, h2, h3, h4, h5, h6 { font-family: {$font_pieces[0]}!important; }"."\n";
    }

    if ( $paragraph_font ) {
        $font_pieces = explode(":", $paragraph_font);
        $custom .= "p, p * { font-family: {$font_pieces[0]}!important; }"."\n";
    }

    //Output all the styles
    wp_add_inline_style( 'starterx-style', $custom );
}
add_action( 'wp_enqueue_scripts', 'starterx_custom_styles' );

// Get google fonts list
function starterx_google_fonts_list() {
    $google_fonts_get = json_decode(file_get_contents("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyB7AME11vpDbowzFoyeVG3nvPufpj02fLY"), true);
    $google_fonts_list = [];

    foreach($google_fonts_get['items'] as $key => $item) {
        $google_fonts_list[$item['family']] = $item['family'];
    }
    return $google_fonts_list;
}