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
	

	$args = array(
		'post_type' => 'post',
		'posts_per_page' => 3,
		'order' => 'DESC',
		'orderby' => 'date',
	);
	$posts = get_posts($args);
// 	if (empty($posts)) {
// 		return 'No posts';
// 	}
// 	$markup = '<ul>';
// 	foreach ($posts as $post) {
// 		$markup .= '<li><a href="' . get_permalink($post->ID) . '">' . $post->post_title . '</a></li>';
// 	}
// 	$markup .= '</ul>';
// 	return $markup;
// convert post to JSON
	$posts = array_map(function ($post) {
		return [
			'id' => $post->ID,
			'title' => $post->post_title,
			'content' => $post->post_content,
			'excerpt' => $post->post_excerpt,
			'link' => get_permalink($post->ID),
			'featuredImage' => get_the_post_thumbnail_url($post->ID),
			'author' => get_the_author_meta('display_name', $post->post_author),
			'date' => $post->post_date,
		];
	}, $posts);

	ob_start(); ?>
	<div class = "post__wrapper">
		<?php 
	foreach ($posts as $post) {
		?>
		<div class="post__card">
			<div class="post__image">
				<img src="<?php echo $post['featuredImage']; ?>" alt="<?php echo $post['title']; ?>">
			</div>
			<div class="post__content">
				<h2 class="post__title">
					<a href="<?php echo $post['link']; ?>"><?php echo $post['title']; ?></a>
				</h2>
				<div class="post__meta">
					<span class="post__author">By <?php echo $post['author']; ?></span>
					<span class="post__date"><?php echo $post['date']; ?></span>
				</div>
				<div class="post__excerpt">
					<?php echo $post['excerpt']; ?>
				</div>
			</div>
		</div>
		<?php
	} ?>
	</div>
	<?php
return ( ob_get_clean());




}



function dynamic_block_dynamic_block_block_init() {
	register_block_type( __DIR__ . '/build',array(
		'render_callback' => 'dynamic_block_latest_posts',
		
	) );
}
add_action( 'init', 'dynamic_block_dynamic_block_block_init' );

