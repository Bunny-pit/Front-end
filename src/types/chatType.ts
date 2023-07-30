export interface DmListType {
	_id: string;
	users: Array<{
		_id: string;
		userName?: string;
		secretName?: string;
		email?: string;
	}>;
	messages: string[];
	lastMessage: string | null;
	__v: number;
}

export type chatListType = DmListType[];
