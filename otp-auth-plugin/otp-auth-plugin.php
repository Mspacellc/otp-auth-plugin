<?php
/*
Plugin Name: OTP Auth Plugin
Description: v1.7.3 Final - UI + Logic for OTP login, register, and reset.
Version: 1.7.3
Author: MSpace Creative
*/

defined('ABSPATH') || exit;

add_shortcode('otp_auth_form', function () {
    if (is_user_logged_in()) {
        echo "<script>window.location.href='/my-account';</script>";
        return '';
    }
    echo '<div id="otp-ui"></div>';
});

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_script('otp-js', plugin_dir_url(__FILE__) . 'otp.js', [], null, true);
    wp_enqueue_style('otp-css', plugin_dir_url(__FILE__) . 'otp.css');
    wp_localize_script('otp-js', 'otp_ajax', ['ajax_url' => admin_url('admin-ajax.php')]);
});
