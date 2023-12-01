import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { ColorIndicator, ColorPicker, ColorPalette } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

registerBlockType('gutenberg-examples/example-03-editable-esnext', {
    apiVersion: 3,
    title: 'AAA',
    icon: 'universal-access-alt',
    category: 'design',
    supports: {
        color: {
            background: true,
        }
    },
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
        style: {
            type: 'object',
            default: {
                color: {
                    background: '#fff',
                }
            }
        }
    },
    example: {
        attributes: {
            content: 'Hello World',
        },
    },
    edit: (props) => {
        const {
            attributes: { content },
            setAttributes,
            className,
        } = props;
        const blockProps = useBlockProps();
        const onChangeContent = (newContent) => {
            setAttributes({ content: newContent });
        };
        const onChangeBGColor = (hexColor) => {
            setAttributes({ style: { color: { background: hexColor } } });
        }
        const [color, setColor] = useState('#f00')
        const colors = [
            { name: 'red', color: '#f00' },
            { name: 'white', color: '#fff' },
            { name: 'blue', color: '#00f' },
            { name: 'black', color: '#000' },
            { name: 'green', color: '#0f0' },

        ];

        return (
            <>
                <InspectorControls
                    key="setting">
                    <div id="gutenpride-controls">
                        <fieldset>
                            <legend className="blocks-base-control__label">
                                {__('Background color', 'gutenpride')}
                            </legend>
                            <ColorPalette
                                colors={colors}
                                value={color}
                                onChange={(color) => setColor(color)}
                            />

                        </fieldset>
                    </div>
                </InspectorControls>
                <ColorIndicator // Element Tag for Gutenberg standard colour selector
                    //  onChange={ onChangeBGColor } // onChange event callback
                    colorValue={color}


                />

                <RichText
                    {...blockProps}
                    tagName="p"
                    onChange={onChangeContent}
                    value={content}
                />
            </>
        );
    },
    save: (props) => {
        const blockProps = useBlockProps.save();
        return (
            <RichText.Content
                {...blockProps}
                tagName="p"
                value={props.attributes.content}
            />
        );
    },
});