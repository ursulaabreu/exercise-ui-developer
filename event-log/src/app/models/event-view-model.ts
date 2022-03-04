export interface EventViewModel {
	timestamp: Date;
	level: 'INFO' | 'WARNING' | 'ERROR';
	message: string;
	color: string;
	hover: boolean;
	showOnTable: boolean;
	levelText: string;
}