import {__} from '@wordpress/i18n';
import {useBlockProps, RichText, BlockControls} from '@wordpress/block-editor';
//Components
import {ToolbarGroup, ToolbarButton, ToolbarDropdownMenu, __experimentalText as Text } from '@wordpress/components';
import './editor.scss'

import './editor.scss';

export default function Edit({attributes, setAttributes}) {

  const {text} = attributes;

  return ( <>
  <BlockControls>
	<p>Inline Controls</p>
  </BlockControls>

   <BlockControls>
	{text &&
    <ToolbarGroup>
      <ToolbarButton
        title='Align Left'
        icon="editor-alignleft"
        label={__('Wordpress', 'blocks-course')}
        onClick={() => alert('left')}/> {/* <Open Source Button*/}
      <ToolbarButton
        title='Align Center'
        icon="editor-aligncenter"
        label={__('Wordpress', 'blocks-course')}
        onClick={() => alert('center')}/>
      <ToolbarButton
        title='Align Right'
        icon="editor-alignright"
        label={__('Wordpress', 'blocks-course')}
        onClick={() => alert('right')}/>
    </ToolbarGroup>
     }
    
    <ToolbarGroup>
   
      <ToolbarDropdownMenu
        icon="arrow-down-alt2"
        label={__('Table', 'blocks-course')}
        controls={[
        {
          title: __('Wide', 'blocks-course'),
          icon: "align-wide"
        }, {
          title: __('Full Width', 'blocks-course'),
          icon: "align-full-width"
        }, {
          title: __('Fixed Width', 'blocks-course'),
          icon: "align-pull-right"
        }
      ]}/>
    </ToolbarGroup>

  </BlockControls> < RichText {
    ...useBlockProps()
  }
  onChange = {
    (value) => setAttributes({text: value})
  }
  value = {
    text
  }
  placeholder = {
    __('Your text', 'blocks-course')
  }
  tagName = "h2" allowedFormats = {
    ['core/bold', 'core/italic']
  } /> </>);
}
