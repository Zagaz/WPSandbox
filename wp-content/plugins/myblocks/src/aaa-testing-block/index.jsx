import { registerBlockType } from '@wordpress/blocks';

import {
    useBlockProps,
    RichText,
    AlignmentToolbar,
    BlockControls,
} from '@wordpress/block-editor';

import './style.scss';

registerBlockType( 'myblocks/aaa-testing-block', {
    apiVersion: 3,
    title: 'AAA - test',
    icon: 'universal-access-alt',
    category: 'design',
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
        alignment: {
            type: 'string',
            default: 'none',
        },
    },
    example: {
        attributes: {
            content: 'Hello World',
            alignment: 'right',
        },
    },
    edit: ( { attributes, setAttributes } ) => {
        const onChangeContent = ( newContent ) => {
            setAttributes( { content: newContent } );
        };

        const onChangeAlignment = ( newAlignment ) => {
            setAttributes( {
                alignment: newAlignment === undefined ? 'none' : newAlignment,
            } );
        };

        return (
            <div { ...useBlockProps() }>
                {
                    <BlockControls>
                        <AlignmentToolbar
                            value={ attributes.alignment }
                            onChange={ onChangeAlignment }
                        />
                        
                   </BlockControls>
                }
                <RichText
                    className={'rich-text-custom-style' }
                    style={ { textAlign: attributes.alignment } }
                    tagName="p"
                    onChange={ onChangeContent }
                    value={ attributes.content }
                    placeholder={ 'Add your custom text here' }
                />
            </div>
        );
    },
    save: ( props ) => {
        const blockProps = useBlockProps.save();

        return (
            <div { ...blockProps }>
                <RichText.Content
                    className={ `gutenberg-examples-align-${ props.attributes.alignment }` }
                    tagName="p"
                    value={ props.attributes.content }
                />
            </div>
        );
    },
} );