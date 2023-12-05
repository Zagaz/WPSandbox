import {__} from '@wordpress/i18n';
import {useBlockProps, RichText, BlockControls, AlignmentToolbar} from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {

  const {text, alignment} = attributes;
  
  const onChangeAlignment = (newAlignment) => {
    setAttributes({alignment: newAlignment});
  }
  
  const onChangeText = (newText) => {
    setAttributes({text: newText});
  }

  return ( <> <BlockControls>
    <AlignmentToolbar
     onChange={onChangeAlignment}
	value = {alignment}
	/>
  </BlockControls> 
  < RichText 
  {    ...useBlockProps()  }
  onChange = {    onChangeText  }
  value = { text  }
  style={
	    {textAlign: alignment}
  }
  placeholder = {__('Your text', 'blocks-course')}
  tagName = "h2" allowedFormats = {['core/bold', 'core/italic']}
   />
   </>);
}
