import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'Myblocks – hello from the saved content!333' }
		</p>
	);
}
