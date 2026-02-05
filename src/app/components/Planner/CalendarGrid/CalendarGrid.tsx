import { PLANNER_EVENTS, PLANNER_ROOMS, PLANNER_TIME_SLOTS } from '@/lib/planner/constants';
import { Box, Flex, Grid, VStack } from '@chakra-ui/react';
import { EventCard } from '../EventCard';
import { CalendarCell } from './CalendarCell';
import { ColumnHeader } from './ColumnHeader';

export const CalendarGrid = () => {
	const ROW_HEIGHT = 120;

	const getEventsForSlot = (roomId: string, time: string) => {
		return PLANNER_EVENTS.filter((e) => e.columnId === roomId && e.startTime === time);
	};

	return (
		<Flex
			w="full"
			h="full"
			overflowX="auto"
			overflowY="auto"
			bg="white"
			rounded="xl"
			borderBottomRightRadius="0"
			borderBottomLeftRadius="0"
			borderWidth="1px"
			borderColor="brandNeutralOutline"
			maxH="calc(100vh - 220px)"
		>
			{/* Time Cell */}
			<VStack
				border="none"
				gap={0}
				justifyContent="start"
			>
				<Box
					position="sticky"
					top={0}
					zIndex={20}
					h={11}
					w="full"
				>
					<ColumnHeader
						color="brandSecondary"
						label="Days"
						bg="brandSecondaryLight"
					/>
				</Box>
				<Grid
					templateColumns="120px"
					templateRows={`repeat(${PLANNER_TIME_SLOTS.length}, ${ROW_HEIGHT}px)`}
				>
					{PLANNER_TIME_SLOTS.map((slot) => (
						<Box
							key={slot.time}
							borderRightWidth="1px"
							borderBottomWidth="1px"
							borderColor="brandNeutralOutline"
							p={2}
							px={4}
							color="brandNeutralGrey"
							fontSize="xs"
							fontWeight="semibold"
							position="sticky"
							left={0}
							bg="white"
							zIndex={10}
							display="flex"
							alignItems="flex-start"
							// justifyContent="center"
							pt={2}
						>
							{slot.time}
						</Box>
					))}
				</Grid>
			</VStack>
			<Grid
				templateColumns={`repeat(${PLANNER_ROOMS.length}, minmax(240px, 1fr))`}
				templateRows={`44px repeat(10, ${ROW_HEIGHT}px)`}
				width="max-content"
				minWidth={0}
			>
				{/* Headers */}
				{PLANNER_ROOMS.map((room) => (
					<Box
						key={room.id}
						position="sticky"
						top={0}
						zIndex={20}
					>
						<ColumnHeader label={room.name} />
					</Box>
				))}

				{/* Grid Rows */}

				{/* Room Cells for this Time */}
				{PLANNER_TIME_SLOTS.map((slot) => (
					<Box key={slot.time}>
						{/* Room Cells for this Time */}
						{PLANNER_ROOMS.map((room) => {
							const events = getEventsForSlot(room.id, slot.time);
							return (
								<CalendarCell
									key={`${room.id}-${slot.time}`}
									showSeeAll={events.length > 2}
								>
									{events.map((event) => (
										<Box
											key={event.id}
											h={events.length > 1 ? '48%' : 'full'}
										>
											<EventCard
												title={event.title}
												assignee={event.assignee}
												initials={event.initials}
												timeRange={`${event.startTime} - ${event.endTime}`}
												color={event.color}
											/>
										</Box>
									))}
								</CalendarCell>
							);
						})}
					</Box>
				))}
			</Grid>
		</Flex>
	);
};
