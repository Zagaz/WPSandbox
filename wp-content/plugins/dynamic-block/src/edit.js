import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import { RawHTML } from "@wordpress/element";
import { dateI18n, format, __experimentalGetSettings } from "@wordpress/date";

import {
  Spinner,
  Panel,
  PanelBody,
  PanelRow,
  RadioControl,
  SelectControl,
  ToggleControl,
} from "@wordpress/components";
import "./editor.scss";
import React from "react";
/**
 * Edit function for the dynamic block.
 *
 * @param   { Object }   props   Block props.
 * @returns  { JSX.Element }
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 */

export default function Edit({ attributes, setAttributes }) {
  const { postsPerPage, order, category, author, allAuthors , showFeaturedImage , showExcerpt , showAuthor , showDate , showCategories, showTitle} = attributes;

  // Events
  function onChangepostsPerPage(newpostsPerPage) {
    const parsedValue = parseInt(newpostsPerPage, 10);
    if (!isNaN(parsedValue) && parsedValue > 0) {
      setAttributes({ postsPerPage: parsedValue });
    }
  }
  function onChangeOrder(newOrder) {
    setAttributes({ order: newOrder });
  }
  function onChangeCategory(newCategory) {
    setAttributes({ category: newCategory });
  }
  function onChangeAuthor(newAuthor) {
    setAttributes({ author: newAuthor });
  }
  function onChangeShowFeaturedImage() {
    setAttributes({ showFeaturedImage: ! showFeaturedImage });
  
  }
  function onChangeShowExcerpt() {
    setAttributes({ showExcerpt: ! showExcerpt });
   
  }
  function onChangeShowAuthor() {
    setAttributes({ showAuthor: ! showAuthor });
   
  }
  function onChangeShowDate() {
    setAttributes({ showDate: ! showDate });
   
  }
  function onChangeShowCategories() {
    setAttributes({ showCategories: ! showCategories });
   
  }
  function onChangeShowTitle() {
    setAttributes({ showTitle: ! showTitle });
   
  }




  //Posts
  const posts = useSelect((select) => {
    return select("core").getEntityRecords("postType", "post", {
      per_page: postsPerPage,
    });
    [postsPerPage];
  });
  // Categories
  const categories = useSelect((select) => {
    return select("core").getEntityRecords(
      "taxonomy",
      "category",
      { per_page: -1, exclude: [1] },
      []
    );
  });
  // Authors

  if (allAuthors) {
    console.log("All authors is true");
  } else {
    console.log("All authors is false");
  }

  const authors = useSelect((select) => {
    return select("core").getUsers(
      {
        // authors only
        who: "authors",
        per_page: -1,
        exclude: [1],
      },
      []
    );
  });

  const blockProps = useBlockProps();
  if (!posts) {
    return (
      <>
        <Spinner />;<p>{__("Loading...", "dynamic-block")}</p>
      </>
    );
  }
  if (0 === posts.length) {
    return <p>{__("No posts")}</p>;
  }
  if (!posts) {
    return <p>{__("No posts")}</p>;
  }
  console.log(posts);

  return (<>
    <InspectorControls>
        <Panel header="Block Settings">
		
		
          <PanelBody title="Posts Query"
		 initialOpen={true}>
            {/* Number of Posts SELECT */}
		  <h3> Here you can filter the parameters of the query, such as the number of posts, the order, the category and the author. </h3>
            <PanelRow
		  title="Number of Posts"
              heading={__("Number of Posts", "dynamic-block")}
              description={__(
                "How many posts should be displayed?",
                "dynamic-block"
              )}
            >
			{/** insert a title for the input  */}
  
			<strong>
			<label for="postsPerPage">Number of Posts</label></strong>
               <input type="number" value={postsPerPage} id="postsPerPage" min="1" style={{ maxWidth: "50%" }}
		          onChange={(event) => {
                  onChangepostsPerPage(event.target.value);
                }}
              />
            </PanelRow>
            {/* Order SELECT */}
            <PanelRow
              heading="Order"
              description={__("Order of posts", "dynamic-block")}
            >
              <RadioControl
                label="Order"
                selected={order}
                options={[
                  { label: "Ascending", value: "ASC" },
                  { label: "Descending", value: "DESC" },
                ]}
                onChange={(order) => {
                  setAttributes({ order: order });
                }}
              />
            </PanelRow>
            {/* Category SELECT */}
            <PanelRow heading="Category" description="Select a category">
              <SelectControl
                label="Category"
                multiple
                value={category}
                options={categories.map((category) => ({
                  label: category.name,
                  value: category.id,
                }))}
                onChange={(category) => {
                  setAttributes({ category: category });
                }}
              />
            </PanelRow>
            {/* Author SELECT */}
            <PanelRow heading="Author" description="Select an author">
              <ToggleControl
                label="All Authors"
                checked={allAuthors}
                onChange={(allAuthors) => {
                  setAttributes({ allAuthors: allAuthors });
                }}
              />
            </PanelRow>
            {/** If "All Authors is toggled, then hide the Selection" */}
            <PanelRow className={allAuthors ? "hidden" : ""}>
              <SelectControl
                label="Author"
                disabled={allAuthors}
                description="Select an author"
                multiple
                value={author}
                options={authors.map((author) => ({
                  label: author.name,
                  value: author.id,
                }))}
                onChange={(author) => {
                  setAttributes({ author: author });
                }}
              />
            </PanelRow>
          </PanelBody>
          {/* //================================================================================================ */}

		<PanelBody title="Posts Settings">
      <PanelRow heading="Featured Image" description="Show the featured image"  initialOpen={false}
      >
        <ToggleControl
          label="Show Featured Image"
          checked={showFeaturedImage}
          onChange={onChangeShowFeaturedImage}
        />
      </PanelRow>
      <PanelRow heading="Excerpt" description="Show the excerpt">
        <ToggleControl
          label="Show Excerpt"
          checked={showExcerpt}
          onChange={onChangeShowExcerpt}
        />
      </PanelRow>
      <PanelRow heading="Author" description="Show the author">
        <ToggleControl
          label="Show Author"
          checked={showAuthor}
          onChange={onChangeShowAuthor}
        />
      </PanelRow>
      <PanelRow heading="Date" description="Show the date">
        <ToggleControl
          label="Show Date"
          checked={showDate}
          onChange={onChangeShowDate}
        />
      </PanelRow>
      <PanelRow heading="Title" description="Show the title">
        <ToggleControl
          label="Show Title"
          checked={showTitle}
          onChange={onChangeShowTitle}
        />
      </PanelRow>
      <PanelRow heading="Categories" description="Show the categories">
        <ToggleControl
          label="Show Categories"
          checked={showCategories}
          onChange={onChangeShowCategories}
        />
      </PanelRow>
		</PanelBody>
        </Panel>
      </InspectorControls>

      {/* The OUTPUT============================= */}
<div {...blockProps}>
      <h1> List of posts</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
             {/* Render author by name  */}

              {showAuthor && 

              <h3>Author Name</h3>
              
              
              }
              <a href={post.link}>{post.title.rendered}</a>
              <br />
              <RawHTML>{post.excerpt.rendered}</RawHTML>
              <br />
              <RawHTML>
                {__("Published on", "dynamic-block")}{" "}
                {format(
                  __experimentalGetSettings().formats.date,
                  dateI18n(__experimentalGetSettings().formats.date, post.date)
                )}
              </RawHTML>
              <br />
              
            </li>
          );
        })}
      </ul>
      <hr />
    </div>
 
 </> );
}
