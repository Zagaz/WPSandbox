import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

export default registerBlockType('myblocks/static-block', {
     title: __('ZAZ - Static Block', 'myblocks'),
     description: __('A static block', 'myblocks'),
     category: 'common',
     icon: 'smiley',
     keywords: [
          __('ZAZ', 'myblocks'),
          __('Static', 'myblocks'),
          __('Block', 'myblocks'),
     ],

     edit: props => {
          //This is where the props are destructured
          const { className, isSelected } = props;

          return (
               <>
                    <div className = { className } >
                         <h2>{__('This is the Backend title', 'myBlocks')}</h2>
                         <p>Click on this box</p>
                         {isSelected && (
                              <p>
                                   <strong>This message is only visible if block is selected</strong>
                              </p>
                         )}
                    </div>
               </>
          )
     },
     save: props => {
          return (
               <>
                    <div>
                         <h2>{__('This is the Frontend title', 'myBlocks')}</h2>
                         <p>{__('This is the Static Block and you\'re on the Frontend now!')}</p>
                    </div>
               </>
          )
     }
});
//Done
