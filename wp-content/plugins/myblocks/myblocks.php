<?php

/**
 * Plugin Name:       My Static Blocks
 * Description:       Some experiments with Gutenberg static blocks
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            André Ranulfo
 * Author URI: 	  https://www.linkedin.com/in/andre-ranulfo/
 * License:           MIT
 * License URI:       https://opensource.org/licenses/MIT
 * Text Domain:       myblocks
 * Domain Path:       /languages
 * 
 */

 // You shall not pass!!!
if (!defined('ABSPATH')) {
	exit; 
}

/**
 * Block Initializer.
 */

function myblocks_myblocks_block_init()
{
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'myblocks_myblocks_block_init');
