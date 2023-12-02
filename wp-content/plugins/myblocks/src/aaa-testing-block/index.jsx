import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { RichText } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { ColorPalette } from '@wordpress/components';


// Register the block
registerBlockType('zaz-colorpallet-block/myblock', {
    title: 'AAA',
    icon: 'art',
    category: 'common',
    attributes: {
       
    },

    edit: ({ attributes, setAttributes }) => {
       

        return (<>

        
        
        
        
        </>)
      
    },

    save: ({ attributes }) => {
        return (<>
        
        
        
        
        </>);
    },
});
