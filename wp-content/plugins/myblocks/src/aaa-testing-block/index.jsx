import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { ColorIndicator, ColorPalette } from '@wordpress/components';
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
     
        const [colorText, setColorText] = useState('#000')
        const [colorBG, setColorBG] = useState('#fff')

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
                        {/* TEXT */}
                        <fieldset>
                            <legend className="blocks-base-control__label">
                                {__('TEXT', 'gutenpride')}
                            </legend>
                            <ColorPalette
                                colors={colors}
                                value={colorText}
                                onChange={(color) => setColorText(color)}
                            />

                        </fieldset>
                            {/* BACKGROUND */}
                        <fieldset>
                            <legend className="blocks-base-control__label">
                                {__('BACKGROUND', 'gutenpride')}
                            </legend>
                            <ColorPalette
                                colors={colors}
                                value={colorBG}
                                onChange={(color) => setColorBG(color)}
                            />

                        </fieldset>
                    </div>
                </InspectorControls>

                <RichText
                    {...blockProps}
                    tagName="p"
                    onChange={onChangeContent}
                    value={content}
                    style={{
                        backgroundColor: colorBG,
                        color: colorText
                    }}
                />
                <div>
                    Background: <ColorIndicator colorValue={colorBG} /><br />
                    Text : <ColorIndicator colorValue={colorText} />

                </div>
                    
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