const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;
const { __ } = wp.i18n;

import Icon from './icon';
import './style.scss';


registerBlockType( 'myblocks/richtext-block', {
     title: 'ZAZ - Richtext Block',
     icon: Icon,
     category: 'common',
     attributes: {
          content: {
               type: 'array',
               source: 'children',
               selector: '.content',
          },
     },
     edit: ( props ) => {
          const { attributes: { content }, setAttributes, className } = props;
          const onChangeContent = ( newContent ) => {
               setAttributes( { content: newContent } );
          };
          return (
               <>
               <h2>Backend: {__('Richtext Block', 'myblock')}</h2>
               <RichText
                    tagName="p"
                    className={ className }
                    onChange={ onChangeContent }
                    value={ content }
                    placeholder={ __( 'Add your custom text', 'myblock' ) }     
               />
               </>
          );
     },
     save: ( props ) => {
          const { attributes: { content } } = props;
          return (
               <>
               <h2>
                    Frontend: {__('Richtext Block', 'myblock')}
                    </h2>
               {
                    content && (
                         <div className="content">
                              <RichText.Content
                                   tagName="p"
                                   value={ content }
                              />
                         </div>
                    )
               }
               </>
          );
     },
     } );