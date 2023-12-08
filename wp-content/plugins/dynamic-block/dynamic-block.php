<?php
/**
 * Plugin Name:       ZAGAZ - Latest Posts
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       dynamic-block
 *
 * @package           latest-posts
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

 function  dynamic_block_latest_posts($attr) {
	// numberOfPosts
	$numberOfPosts = $attr['numberOfPosts'];
	echo "<h1>Number of posts: $numberOfPosts </h1>";



	
	$args = array(
		'post_type' => 'post',
		'posts_per_page' => 	$numberOfPosts,
		'order' => 'DESC',
		'orderby' => 'date',
	);
	$posts = get_posts($args);
	if (empty($posts)) {
		return 'No posts';
	}
	$markup = '<ul>';
	foreach ($posts as $post) {
		$markup .= '<li><a href="' . get_permalink($post->ID) . '">' . $post->post_title . '</a></li>';
	}
	$markup .= '</ul>';
	return $markup;
}


function dynamic_block_dynamic_block_block_init() {
	register_block_type( __DIR__ . '/build',array(
		'render_callback' => 'dynamic_block_latest_posts',
		
	) );
}
add_action( 'init', 'dynamic_block_dynamic_block_block_init' );


