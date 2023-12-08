import {__} from '@wordpress/i18n';
import {useBlockProps} from '@wordpress/block-editor';
import {useSelect} from '@wordpress/data';
import {RawHTML} from '@wordpress/element';
import {dateI18n, format, __experimentalGetSettings} 
from '@wordpress/date';
import { Spinner } from '@wordpress/components';
import './editor.scss';

/**
 * Edit function for the dynamic block.
 *
 * @param   { Object }   props   Block props.
 * @returns  { JSX.Element }
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 */

export default function Edit({attributes, setAttributes}) {
  const {numberOfPosts, displayDate} = attributes;

  const posts = useSelect((select) => {
    return select('core').getEntityRecords('postType', 'post', {'per_page': numberOfPosts});
    [numberOfPosts]
  });

  const blockProps = useBlockProps();7
  if (!posts) {
    return(<>
    <Spinner />;
    <p>{__('Loading...')}</p>
        </>) 
  }	


  return (




    <div {... blockProps  }>
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
