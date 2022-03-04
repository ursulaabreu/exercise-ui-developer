export interface EventModel {
	timestamp: string;
	level: 'INFO' | 'WARNING' | 'ERROR';
	message: string;
}