// make a block with a richtext field
// // --------------------------------------------------
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;
import Icon from './icon.jsx';
import './style.scss';
// end replace

registerBlockType( 'myblocks/richtext', {
     title: __( 'ZAZ - RichText', 'myblocks' ),   
     icon: Icon,
     category: 'common',
     attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: 'p',
        },
     },

     edit: ( props ) => {
            const { attributes: { content }, setAttributes, className } = props;
            const onChangeContent = ( newContent ) => {
               setAttributes( { content: newContent } );
            };
            return (
               <div className={ className }>
                         <h2>     Backend: {__( 'RichText', 'myblocks' )} </h2>
                     <RichText
                      tagName="p"
                      className={ className }
                      onChange={ onChangeContent }
                      placeholder={ __( 'Add your custom text', 'myblock' ) }     
                      
                      value={ content } 
                     />
               </div>
            );
     },
     save: ( props ) => {
            return (
               <div>
                     <h2>     Frontend: {__( 'RichText', 'myblocks' )} </h2>
                     <RichText.Content
                      tagName="p"
                      value={ props.attributes.content }
                     />
               </div>
            );
     },
} );
// // --------------------------------------------------
//
//