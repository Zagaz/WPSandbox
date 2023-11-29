// Block with one plain text

import { registerBlockType} from '@wordpress/blocks';
import { TextControl } from '@wordpress/components';
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
              
           },
           edit: ( props ) => {
                const { attributes: { title }, setAttributes, className } = props;
                const onChangeTitle = ( newTitle ) => {
                     setAttributes( { title: newTitle } );
                };

                return (
                     <div className={ className }>
                         <TextControl
                         label = { __( 'Title', 'myblocks' ) }
                         value = { title }
                         onChange = { onChangeTitle }     
                         />
                    

                         
                       
                     </div>
                );
           },
           save: ( props ) => {
                const { attributes: { title } } = props;
                return (
                    <>
                     <div>
                         <h4>Frontend title</h4>
                          <h3>{ title }</h3>
                     </div>
                     </>
                );
           },
      } );


