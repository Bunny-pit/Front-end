import React, { useState } from 'react';
import { TextArea } from '../MainHomeSendBoxStyle';

interface TextAreaProps {
	placeholder: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const MainHomeSendBoxTextArea = ({
	placeholder,
	value,
	onChange,
	onKeyDown,
}: TextAreaProps) => {
	const [textCount, setTextCount] = useState(0);

	const CheckLengthText = () => {};

	return (
		<>
			<TextArea
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onKeyDown={onKeyDown}
			/>
		</>
	);
};

export default MainHomeSendBoxTextArea;
