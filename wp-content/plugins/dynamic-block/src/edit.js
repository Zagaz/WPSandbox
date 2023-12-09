import {__} from '@wordpress/i18n';
import {useBlockProps, InspectorControls} from '@wordpress/block-editor';
import {useSelect} from '@wordpress/data';
import {RawHTML} from '@wordpress/element';
import {dateI18n, format, __experimentalGetSettings} 
from '@wordpress/date';
import { 
	Spinner , 
	TextControl, 
	Panel, 
	PanelBody, 
	PanelRow, 
	RadioControl,
	SelectControl } from '@wordpress/components';
import './editor.scss';

/**
 * Edit function for the dynamic block.
 *
 * @param   { Object }   props   Block props.
 * @returns  { JSX.Element }
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 */

export default function Edit({attributes, setAttributes}) {
  const {numberOfPosts, order , category , author} = attributes;
  // Events
  function onChangeNumberOfPosts(newNumberOfPosts) {
	    setAttributes({numberOfPosts: newNumberOfPosts});
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
    return select('core').getEntityRecords('postType', 'post', {'per_page': numberOfPosts});
    [numberOfPosts]
  });
 // get all categories
  const categories = useSelect((select) => {
    return select('core').getEntityRecords('taxonomy', 'category', {'per_page': -1});
  });
  // get all authors
  const authors = useSelect((select) => {
    return select('core').getEntityRecords('taxonomy', 'author', {'per_page': -1});
  });
  


  
  
  console.log(posts);

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
						value={numberOfPosts}
						onChange={onChangeNumberOfPosts}
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
							{ label: 'Ascending', value: 'asc' },
							{ label: 'Descending', value: 'desc' },
						]}
						onChange={onChangeOrder}
					/>
				</PanelRow>
				{/* Category SELECT */}
				<PanelRow
					heading="Category"
					description="Select a category"
				>
					<SelectControl
						label="Category"
						value={category}
						options={categories.map(({ id, name }) => ({
							label: name,
							value: id,

					}))}
						onChange={onChangeCategory}
					/>
					
				
				</PanelRow>

				
			</PanelBody>
			</Panel>
	 
	  
	 </InspectorControls>
	
	
	
	
      <ul>
        {posts && posts.map((post) => {
          return (
            <li key={post.id}>

              <h5>
                <a href={post.link}>
                  {post.title.rendered
                    ? <RawHTML>{post.title.rendered}</RawHTML>
                    : __('(Untitled)')}
                </a>
              </h5>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
