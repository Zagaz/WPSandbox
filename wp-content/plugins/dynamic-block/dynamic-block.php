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

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

function  dynamic_block_latest_posts($attr)
{
	$postsPerPage = (isset($attr['postsPerPage']) && !empty($attr['postsPerPage'])) ? $attr['postsPerPage'] : 1;
	$order = isset($attr['order']) ? strtoupper($attr['order']) : 'DESC';
	$hasFeaturedImage = isset($attr['hasFeaturedImage']) ? $attr['hasFeaturedImage'] : false;
	// CATEGORY ==============
	$category = (isset($attr['category']) && !empty($attr['category'])) ? $attr['category'] : [];
	
	$categories = [];
	foreach ($category as $cat) {
		if ($cat == 'uncategorized') {
			continue;
		}
		array_push($categories, get_the_category_by_ID($cat));
	}
	$categories_string = implode(",", $categories);
	
	// AUTHOR ==============
	$author = (isset($attr['author']) && !empty($attr['author'])) ? $attr['author'] : [];
	$allAuthors = $attr['allAuthors'];
	$authors = [];
	if ($allAuthors) {
		$author = get_users();
		$authors = [];
	} 
	foreach ($author as $auth) {
		array_push($authors, get_the_author_meta('ID', $auth));
	}
	sort($authors);
	$authors_string = implode(",", $authors);
	
	$args = array(
		'post_type' => 'post',
		'posts_per_page' => $postsPerPage,
		'order' => $order,
		'orderby' => 'date',
		'category_name' =>  $categories_string,
		'author' => $authors_string,
	);
	$posts = get_posts($args);

	$posts = array_map(function ($post) {
		return [
			'id' => $post->ID,
			'title' => $post->post_title ? $post->post_title : 'No Title',
			'content' => $post->post_content,
			'excerpt' => $post->post_excerpt,
			'link' => get_permalink($post->ID),
			'featuredImage' => get_the_post_thumbnail_url($post->ID),
			'author' => get_the_author_meta('display_name', $post->post_author),
			'date' => $post->post_date,
		];
	}, $posts);
	ob_start();
	
	echo '<pre>';
	echo "Per page:";
	echo $postsPerPage;
	echo '<br>';
	echo "<br>";
	echo "Order:";
	echo $order;
		 echo "<br>";
		 echo "Categories:";
	var_dump($category);
	echo 'Authors';
	echo "<br>";
	 var_dump($authors);
	 echo '</pre>';
	 if ($hasFeaturedImage){
		echo '<pre>';
		echo "Has Featured Image:";
		echo $hasFeaturedImage;
		echo '</pre>';
	 
	 } else{
		echo '<pre>';
		echo "Has Featured Image:";
		echo $hasFeaturedImage;
		echo '</pre>';
	 

	 }

	if (empty($posts)) {
		return 'No posts';
	} ?>
	<div <?php echo  get_block_wrapper_attributes()  ?>>
		<?php foreach ($posts as $post) { ?>

			<div class="post__card">
				
				<div class="post__image">
					<img src="<?php echo $post['featuredImage']; ?>" alt="<?php echo $post['title']; ?>">
				</div>
				<div class="post__content">
					<h2 class="post__title">
						<a class="post_link" href="<?php echo $post['link']; ?>"><?php echo $post['title']; ?></a>
					</h2>
					<div class="post__meta">
						<span class="post__author">By <?php echo $post['author']; ?></span>
						<span class="post__date"><?php echo $post['date']; ?></span>
					</div>
					<div class="post__excerpt">
						<?php echo $post['excerpt']; ?>
					</div>
					<div class="post_categories">
						<?php echo get_the_category_list(', ', '', $post['id']); ?>
					</div>
				</div>
			</div>
		<?php
		} ?>
	</div>
<?php
	return (ob_get_clean());
}

function dynamic_block_dynamic_block_block_init()
{
	register_block_type(__DIR__ . '/build', array(
		'render_callback' => 'dynamic_block_latest_posts',

	));
}
add_action('init', 'dynamic_block_dynamic_block_block_init');