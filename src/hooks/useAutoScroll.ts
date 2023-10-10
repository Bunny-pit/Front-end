import { useEffect, MutableRefObject } from 'react';

// export const useAutoScroll = (
// 	messageListRef: MutableRefObject<HTMLDivElement | null>,
// 	messages: string[],
// ) => {
// 	const scrollToBottom = () => {
// 		if (messageListRef.current) {
// 			messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
// 		}
// 	};

// 	useEffect(scrollToBottom, [messages]);
// };
export const useAutoScroll = (
	messageListRef: MutableRefObject<HTMLDivElement | null>,
	messageCount: number,
) => {
	useEffect(() => {
		const scrollToBottom = () => {
			if (messageListRef.current) {
				messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
			}
		};

		scrollToBottom();
	}, [messageCount]);
};
