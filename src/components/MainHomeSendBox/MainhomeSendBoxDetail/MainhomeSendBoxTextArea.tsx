import React, { useState } from 'react';
import { TextArea } from '../MainHomeSendBoxStyle';

interface TextAreaProps {
	placeholder: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const MainHomeSendBoxTextArea = ({
	placeholder,
	value,
	onChange,
	onKeyUp,
}: TextAreaProps) => {
	return (
		<>
			<TextArea
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onKeyUp={onKeyUp}
			/>
		</>
	);
};

export default MainHomeSendBoxTextArea;
