import { useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';

export const useSocket = (serverPath: string): Socket | null => {
	const [socket, setSocket] = useState<Socket | null>(null);

	useEffect(() => {
		const socketIo = io(serverPath);

		setSocket(socketIo);

		return () => {
			socketIo.disconnect();
		};
	}, [serverPath]);
	return socket;
};
