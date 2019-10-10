<?php

function footer_customize_register( $wp_customize ) {
    /* Just use the $wp_customize object and create a section or use a built-in
       section. */
    $wp_customize->add_section(
        'footer_section',
        array(
            'title'       => __('Copyright', 'starterx-theme'),
            'priority'    => 150,
        )
    );

    $wp_customize->add_setting( 'copyright_text' , array(
        'default'     => 'created by Frontkom',
        'transport'   => 'postMessage',
    ) );

    $wp_customize->add_control( 'copyright_text', array(
        'label' => 'Copyright Text',
        'section'	=> 'footer_section',
        'type'	 => 'text',
    ) );

}
add_action( 'customize_register' , 'footer_customize_register' );

