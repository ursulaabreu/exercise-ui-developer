export interface Event {
	timestamp: string;
	level: Level;
	message: string;
}

export enum Level {
	INFO,
	WARNING,
	ERROR
}