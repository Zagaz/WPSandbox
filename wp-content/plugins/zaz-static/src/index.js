import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './style.scss';
import Edit from './edit';
import save from './save';

/**
 * Internal dependencies
 */
// import Edit from './edit';
// import save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {

	edit: Edit,
	save,
	

} );
