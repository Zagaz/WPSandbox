import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { RichText } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';


// Register the block
registerBlockType('your-plugin/your-block', {
    title: 'Custom Block',
    icon: 'editor-textcolor',
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
                        <PanelColorSettings
                            title="Background Color"
                            colorSettings={[
                                {
                                    label: 'Choose Background Color',
                                    value: backgroundColor,
                                    onChange: (newColor) =>
                                        setAttributes({ backgroundColor: newColor }),
                                },
                            ]}
                        />
                        <PanelColorSettings
                            title="Text Color"
                            colorSettings={[
                                {
                                    label: 'Choose Text Color',
                                    value: textColor,
                                    onChange: (newColor) =>
                                        setAttributes({ textColor: newColor }),
                                },
                            ]}
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
