export interface ResponseEvent {
	timestamp: string;
	level: LevelEnum;
	message: string;
}

export interface Event {
	timestamp: string;
	level: LevelEnum;
	message: string;
	date: Date;
	color: string;
	hover: boolean;
	showOnTable: boolean;
	levelText: string;
}

export enum LevelEnum {
	INFO,
	WARNING,
	ERROR
}