export interface ResponseEvent {
	timestamp: string;
	level: 'INFO' | 'WARNING' | 'ERROR';
	message: string;
}

export interface EventDisplay {
	timestamp: Date;
	level: 'INFO' | 'WARNING' | 'ERROR';
	message: string;
	color: string;
	hover: boolean;
	showOnTable: boolean;
	levelText: string;
}