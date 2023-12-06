import {useBlockProps, RichText} from '@wordpress/block-editor';

export default function save({attributes}) {
  const {text, alignment, backgroundColor, textColor} = attributes;
  return (
  <>
  <RichText.Content
  { ...useBlockProps.save(

     {
      className: 'wp-block-cgb-text-box',
       style: {
       textAlign: alignment, 
      backgroundColor,
        color: textColor } } )
  }
    tagName="p"
    value={text}
  
  />
  </>)
}
