export interface Event {
	timestamp: string;
	level: LevelEnum;
	message: string;
}

export enum LevelEnum {
	INFO,
	WARNING,
	ERROR
}