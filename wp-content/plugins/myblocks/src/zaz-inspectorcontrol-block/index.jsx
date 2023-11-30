// Block with one plain text

import { registerBlockType} from '@wordpress/blocks';

import { RichText, 	BlockControls , AlignmentToolbar ,
     TextTransformControl
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

    

     registerBlockType( 'myblock/richtext-block', {
           title: __( 'ZAZ -  Richtext Block', 'myblocks' ),
           icon: 'editor-textcolor',
           category: 'common',
           attributes: {
                title: {
                     type: 'string',
                     source: 'html',
                     selector: 'p',
                },
                alignment: {
                    type: 'string',
                
                },
                    transform: {
                         type: 'string',
                      
                    },

              
           },
           edit: ( props ) => {
                const { attributes: { title , alignment, transform}, setAttributes, className } = props;
                const onChangeTitle = ( newTitle ) => {
                     setAttributes( { title : newTitle } );
                };
                const onChangeAlignment = ( newAlignment ) => {
                    setAttributes( { alignment : newAlignment } );
               }
               const onChangeTransform = ( newTransform ) => {
                    setAttributes( { transform : newTransform } );
               }



             

                return (
                    
                     <div >
                         {/* <// BlockControls> */}
                         <BlockControls>
                         <AlignmentToolbar
                               value={ alignment }
                               onChange={ onChangeAlignment }
                         />
                      

                         </BlockControls>

                         <RichText
                         label = { __( 'Title', 'myblocks' ) }
                         value = { title }
                         style = { { textAlign: alignment } }
                         onChange = { onChangeTitle }     
                         />
                         {className}
  
                     </div>
                );
           },
           save: ( props ) => {
                    const { attributes: { title , alignment  } } = props;
         
                return (
                    <>
                    <h1 style = { { textAlign : alignment } }>{ title }</h1>

                    
               
                   
                     </>
                );
           },
      } );


