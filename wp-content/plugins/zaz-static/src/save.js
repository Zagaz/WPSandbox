import { useBlockProps } from '@wordpress/block-editor';
import './style.scss';
import  './editor.scss';

export default function save() {
	const blockProps = useBlockProps.save();
	return (
		<p  {...blockProps }>
			{ 'ZAZ - First Block – hello from the saved content!' }
		</p>
	);
}
