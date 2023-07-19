// import { useEffect, MutableRefObject } from 'react';

// export const useAutoScroll = (
// 	messageListRef: MutableRefObject<HTMLDivElement | null>,
// ) => {
// 	const scrollToBottom = () => {
// 		if (messageListRef.current) {
// 			messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
// 		}
// 	};

// 	useEffect(scrollToBottom, [messageListRef.current?.scrollHeight]);
// };

import { useEffect, MutableRefObject } from 'react';

export const useAutoScroll = (
	messageListRef: MutableRefObject<HTMLDivElement | null>,
	messages: string[],
) => {
	const scrollToBottom = () => {
		if (messageListRef.current) {
			messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
		}
	};

	useEffect(scrollToBottom, [messages]);
};
