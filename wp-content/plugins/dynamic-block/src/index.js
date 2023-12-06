import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';

registerBlockType( metadata.name, {
	icon: {
		src:'megaphone',
		background: '#f03',
		foreground: '#fff',
	},
	edit: Edit,
} );
