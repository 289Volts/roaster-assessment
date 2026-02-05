import { TEvent, TRoom, TTimeSlot } from './types';

export const PLANNER_ROOMS: TRoom[] = [
	{ id: 'room1', name: 'Behandelingkamer1', headerBg: 'green.50' },
	{ id: 'management', name: 'Management', headerBg: 'gray.50' },
	{ id: 'misc', name: 'Bijzonderheden-Verlof-Cursus-', headerBg: 'yellow.50' },
	{ id: 'finance', name: 'Financien', headerBg: 'red.50' }
];

export const PLANNER_TIME_SLOTS: TTimeSlot[] = [
	{ time: '11:00' },
	{ time: '11:30' },
	{ time: '12:00' },
	{ time: '12:30' },
	{ time: '13:00' },
	{ time: '13:30' }
];

export const PLANNER_EVENTS: TEvent[] = [
	{
		id: '1',
		title: 'Surgery',
		startTime: '11:00',
		endTime: '13:00',
		assignee: 'Haico de Gast',
		initials: 'HG',
		type: 'surgery',
		color: 'orange',
		columnId: 'room1'
	},
	{
		id: '2',
		title: 'Pijnspecialist',
		startTime: '11:00',
		endTime: '12:00',
		assignee: 'Diane Lane',
		initials: 'DL',
		type: 'consultation',
		color: 'green',
		columnId: 'room1'
	},
	{
		id: '3',
		title: 'Pijnspecialist',
		startTime: '11:30',
		endTime: '13:30',
		assignee: 'Diane Lane',
		initials: 'DL',
		type: 'consultation',
		color: 'yellow', // Using yellow/gold for variety
		columnId: 'misc'
	},
	{
		id: '4',
		title: 'Pijnspecialist',
		startTime: '11:30',
		endTime: '13:30',
		assignee: 'Diane Lane',
		initials: 'HG',
		type: 'consultation',
		color: 'green',
		columnId: 'finance'
	},
	{
		id: '5',
		title: 'Pijnspecialist',
		startTime: '16:00',
		endTime: '00:00',
		assignee: 'Diane Lane',
		initials: 'HG',
		type: 'consultation',
		color: 'green',
		columnId: 'finance'
	}
];
