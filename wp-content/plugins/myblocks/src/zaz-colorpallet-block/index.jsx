import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { RichText } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { ColorPalette } from '@wordpress/components';


// Register the block
registerBlockType('zaz-colorpallet-block/myblock', {
    title: 'ZAZ - Color Pallet Block',
    icon: 'art',
    category: 'common',
    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: 'p',
        },
        backgroundColor: {
            type: 'string',
            default: '#ffffff', // default background color
        },
        textColor: {
            type: 'string',
            default: '#000000', // default text color
        },
    },

    edit: ({ attributes, setAttributes }) => {
        const { content, backgroundColor, textColor } = attributes;
        
        const colors = [
            { name: 'red', color: '#f00' },
            { name: 'white', color: '#fff' },
            { name: 'blue', color: '#00f' },
            { name: 'green', color: '#0f0' },
        ];

        return (
            <div
                style={{
                    backgroundColor,
                    color: textColor,
                    padding: '20px',
                }}
            >
                <InspectorControls>
                    <PanelBody title="Color Settings">
                      <ColorPalette
                        colors={ colors }
                        value={ backgroundColor }
                        onChange={ ( color ) => setAttributes( { backgroundColor: color } ) }
                        />
                        <ColorPalette
                        colors={ colors }
                        value={ textColor }
                        onChange={ ( color ) => setAttributes( { textColor: color } ) }
                        />

                    </PanelBody>
                </InspectorControls>
                <RichText
                    tagName="p"
                    value={content}
                    onChange={(newContent) => setAttributes({ content: newContent })}
                />
            </div>
        );
    },

    save: ({ attributes }) => {
        const { content, backgroundColor, textColor } = attributes;

        return (
            <div
                style={{
                    backgroundColor,
                   textColor,
                    padding: '20px',
                }}
            >
                <RichText.Content tagName="p" value={content} />
            </div>
        );
    },
});
