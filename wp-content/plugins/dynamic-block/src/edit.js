import {__} from '@wordpress/i18n';
import {useBlockProps, InspectorControls} from '@wordpress/block-editor';
import {useSelect} from '@wordpress/data';
import {RawHTML} from '@wordpress/element';
import {dateI18n, format, __experimentalGetSettings} 
from '@wordpress/date';
import { useState } from 'react';
import { 
	Spinner , 
	TextControl, 
	Panel, 
	PanelBody, 
	PanelRow, 
	RadioControl,
	SelectControl,
	ToggleControl,
	CheckboxControl
	ToggleControl,
	CheckboxControl
 } from '@wordpress/components';
import './editor.scss';
import React from 'react';
import React from 'react';

/**
 * Edit function for the dynamic block.
 *
 * @param   { Object }   props   Block props.
 * @returns  { JSX.Element }
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 */

export default function Edit({attributes, setAttributes}) {
  const {postsPerPage, order , category , author} = attributes;

  // Events
  function onChangepostsPerPage(newpostsPerPage) {
	    setAttributes({postsPerPage: newpostsPerPage});
  }
  function onChangeOrder(newOrder) {
	    setAttributes({order: newOrder});
  }
  function onChangeCategory(newCategory) {
	    setAttributes({category: newCategory});
  }
  function onChangeAuthor(newAuthor) {
	    setAttributes({author: newAuthor});
  }



  //End Events

  const posts = useSelect((select) => {
    return select('core').getEntityRecords('postType', 'post', {'per_page': postsPerPage});
    [postsPerPage]
  });
 // get all categories
  const categories = useSelect((select) => {
    return select('core').getEntityRecords('taxonomy', 'category', {'per_page': -1});
  });
  // get all authors
  const authors = useSelect((select) => {
    return select('core').getEntityRecords('taxonomy', 'author', {'per_page': -1});
  });
  // order
  
  
 

  const blockProps = useBlockProps();7
  if (!posts) {
    return(<>
    <Spinner />;
    <p>{__('Loading...')}</p>
        </>) 
  }	
  if (0 === posts.length) {
    return <p>{__('No posts')}</p>;
  }

   return (
    <div {... blockProps  }>
	 <InspectorControls>
		<Panel header="Post Settings">
			<PanelBody title="Number of Posts" initialOpen={true}>
				{/* Number of Posts */}
				<PanelRow
					heading="Number of Posts"
					description="How many posts should be displayed?"
				>
					<TextControl
						label="Number of Posts"
						value={postsPerPage}
						onChange={onChangepostsPerPage}
					/>
				</PanelRow>
				{/* Order */}
				<PanelRow
					heading="Order"
					description="How should the posts be ordered?"
				>
					<RadioControl	
						label="Order"
						selected={order}
						options={[
							{ label: 'Ascending', value: 'ASC' },
							{ label: 'Descending', value: 'DESC' },
						]}
						onChange={(order)=>{
							setAttributes({order: order});git 
						}}
						
					/>
				</PanelRow>
				{/* Category SELECT */}
				<PanelRow
					heading="Category"
					description="Select a category"
				>
					
			{/** Here I need to mak a multiple choice select */}
					<SelectControl
						label="Category"
						multiple
						value={category}
						options={categories.map((category) => ({
							label: category.name,
							value: category.id,
						}))}
						onChange={(category)=>{
							setAttributes({category: category});
						}	
						}
					/>

				
					
				
				</PanelRow>
				<PanelRow
					heading="Order"
					description="How should the posts be ordered?"
				>
					<ToggleControl 
					label="Order"
					checked={'desc' === order}
					onChange={onChangeOrder}
					
					
					/>
				</PanelRow>
					

				
			</PanelBody>
			</Panel>
	 
	  
	 </InspectorControls>

<h1>The plugin</h1>

<h1>The plugin</h1>

	 
	
	
	
	
    </div>


  );
}
