import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import metadata from './block.json'; 

import "./zaz-static-block";


// registerBlockType( metadata.name, {
// 	...metadata,
// 	edit: Edit,
// 	save,
// } );