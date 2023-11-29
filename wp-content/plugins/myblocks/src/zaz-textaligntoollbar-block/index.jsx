const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, AlignmentToolbar, BlockControls } = wp.blockEditor;

import './style.scss';

registerBlockType('myblocks/textaligntoollbar', {
   title: __('ZAZ - Text Align Toolbar', 'myblocks'),
   icon: 'editor-alignleft',
   category: 'common',
   attributes: {
      content: {
         type: 'array',
         source: 'children',
         selector: 'p',
      },
      alignment: {
         type: 'string',
         default: 'none',
      },
   },

   edit: (props) => {
      const { attributes: { content, alignment }, setAttributes, className } = props;
      const onChangeContent = (newContent) => {
         setAttributes({ content: newContent });
      };
      const onChangeAlignment = (newAlignment) => {
         setAttributes({ alignment: newAlignment === undefined ? 'none' : newAlignment });
      };
      return (
         <div className={className}>
            <h2>     Backend: {__('Text Align Toolbar', 'myblocks')} </h2>
            <BlockControls>
               <AlignmentToolbar
                  value={alignment}
                  onChange={onChangeAlignment}
               />
            </BlockControls>
            <RichText
               tagName="p"
               className={className}
               style={{ textAlign: alignment }}
               onChange={onChangeContent}
               placeholder={__('Add your custom text', 'myblock')}

               value={content}
            />

         </div>
      );
   },
   save: (props) => {
      const { attributes: { content, alignment }, className } = props;
      return (
         <>
            <h2>
               Frontend: {__('Text Align Toolbar', 'myblocks')}
            </h2>
            <div>
               <RichText.Content
                  tagName="p"
                  className={className}
                  value={content}
                  style={{ textAlign: alignment }}

               />
            </div>
         </>

      );
   },
});




