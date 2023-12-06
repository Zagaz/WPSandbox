<?php
/**
 * Plugin Name:       ZAGAZ Dynamic
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            André Ranulfo
 * Author URI:        https://www.linkedin.com/in/andre-ranulfo/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       dynamic-block
 *
 * @package           dynamic
 */

 // You shall not pass!!!
if ( ! defined( 'ABSPATH' ) ) {
	exit; 
}

/**
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function dynamic_block_dynamic_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'dynamic_block_dynamic_block_block_init' );
