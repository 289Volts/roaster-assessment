import { PLANNER_EVENTS, PLANNER_ROOMS, PLANNER_TIME_SLOTS } from '@/lib/planner/constants';
import { Box, Flex, Grid, ScrollArea, VStack } from '@chakra-ui/react';
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
			<ScrollArea.Root height="calc(100dvh - 19.3125rem)">
				<ScrollArea.Viewport>
					<ScrollArea.Content
						// paddingEnd="3"
						textStyle="sm"
						display="flex"
						flexDirection="row"
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

						{/* Calendar Grid */}
						<Grid
							templateColumns={`repeat(${PLANNER_ROOMS.length}, minmax(240px, 1fr))`}
							templateRows={`44px repeat(${PLANNER_TIME_SLOTS.length}, ${ROW_HEIGHT}px)`}
							width="max-content"
							minWidth={0}
							flex={1}
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
							{Array.from({ length: PLANNER_TIME_SLOTS.length * PLANNER_ROOMS.length }).map((_, index) => {
								const roomIndex = index % PLANNER_ROOMS.length;
								const timeSlotIndex = Math.floor(index / PLANNER_ROOMS.length);
								const room = PLANNER_ROOMS[roomIndex];
								const timeSlot = PLANNER_TIME_SLOTS[timeSlotIndex];
								const events = getEventsForSlot(room.id, timeSlot.time);

								return (
									<CalendarCell
										key={`${room.id}-${timeSlot.time}`}
										style={
											{
												// gridColumn: timeSlotIndex === index ? `${timeSlotIndex + 2} / span 1` : undefined
											}
										}
										// key={`${room.id}-${slot.time}`}
										// showSeeAll={events.length > 2}
									>
										{events.map((event) => (
											<Box
												w="full"
												key={event.id}
												// h={events.length > 1 ? '48%' : 'full'}
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
						</Grid>
					</ScrollArea.Content>
				</ScrollArea.Viewport>
				<ScrollArea.Scrollbar />
			</ScrollArea.Root>
		</Flex>
	);
};
