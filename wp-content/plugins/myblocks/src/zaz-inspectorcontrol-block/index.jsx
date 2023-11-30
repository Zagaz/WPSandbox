// Block with one plain text

import { registerBlockType } from '@wordpress/blocks';

import {
     RichText, BlockControls, AlignmentToolbar,
     ColorPalette, InspectorControls
} from '@wordpress/block-editor';

import { TextControl } from '@wordpress/components';

import { __ } from '@wordpress/i18n';



registerBlockType('myblock/richtext-block', {
     title: __('ZAZ -  Richtext Block', 'myblocks'),
     icon: 'editor-textcolor',
     category: 'common',
     attributes: {
          title: {
               type: 'string',
               source: 'html',
               selector: 'p',
               default: "T"   ,
               placeholder : "Enter Title"
          },
          message : {
               type: 'string',
               source: 'text',
               selector: 'div',
               default: "M"   ,
               placeholder : "Enter Message"
          },
          
          alignment: {
               type: 'string',
          },
          bg_color: { type: 'string', default: '#000000' },
          text_color: { type: 'string', default: '#ffffff' },
      


     },
     edit: ({ attributes, setAttributes }) => {
          const { title, message, alignment, bg_color, text_color } = attributes;
          const onChangeTitle = (newTitle) => {
               setAttributes({ title: newTitle });
          };
          const onChangeMessage = (newMessage) => {
               setAttributes({ message: newMessage });
          };

          const onChangeAlignment = (newAlignment) => {
               setAttributes({ alignment: newAlignment });
          }
          const onChangeBGColor = ( hexColor ) => {
               setAttributes( { bg_color: hexColor } );
           };
           const onChangeTextColor = ( hexColor ) => {
               setAttributes( { text_color: hexColor } );
           };





          return (

               <div >
                    {/* <// BlockControls> */}
                    <BlockControls>
                         <AlignmentToolbar
                              value={alignment}
                              onChange={onChangeAlignment}
                         />


                    </BlockControls>
                    <InspectorControls key="setting">
                    <div >
                        <fieldset>
                            <legend className="blocks-base-control__label">
                                { __( 'Background color', 'myblock' ) }
                            </legend>
                            <ColorPalette // Element Tag for Gutenberg standard colour selector
                                onChange={ onChangeBGColor } // onChange event callback
                            />
                        </fieldset>
                        <fieldset>
                            <legend className="blocks-base-control__label">
                                { __( 'Text color', 'myblock' ) }
                            </legend>
                            <ColorPalette // Element Tag for Gutenberg standard colour selector
                                onChange={ onChangeTextColor } // onChange event callback
                            />
                        </fieldset>
                    </div>
                </InspectorControls>

                <TextControl
                     label={__('Title', 'myblocks')}
                     value={title}
                     onChange={onChangeTitle}
                     style={ {
                         backgroundColor: attributes.bg_color,
                         color: attributes.text_color,
                     } }
                     />

                    <br />
                
                    

                    <RichText
                         label={__('Message', 'myblocks')}
                         value={message}
                         onChange={onChangeMessage}
                         style={{
                               textAlign: alignment ,
                               backgroundColor: attributes.bg_color,
                                   color: attributes.text_color,
                              }}
                   
                              id="message"
                    />
                   



               </div>
          );
     },
     save: (props) => {
          const { attributes: { title, alignment } } = props;

          return (
               <>
                    <h1 style={{ textAlign: alignment }}>{title}</h1>




               </>
          );
     },
});


