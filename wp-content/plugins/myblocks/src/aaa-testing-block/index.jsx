import { registerBlockType } from '@wordpress/blocks';
import ServerSideRender from '@wordpress/server-side-render';
import { useBlockProps } from '@wordpress/block-editor';

registerBlockType( 'gutenberg-examples/example-dynamic', {
    apiVersion: 3,
    title: 'aaa Example: last post',
    icon: 'megaphone',
    category: 'widgets',

    edit: function ( props ) {
        const blockProps = useBlockProps();
        return (
            <div { ...blockProps }>
                <ServerSideRender
                    block="gutenberg-examples/example-dynamic"
                    attributes={ props.attributes }
                />
            </div>
        );
    },
} );