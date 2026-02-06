'use client';
import { usePlannerView } from '@/context/PlannerViewContext';
import {
	Box,
	Button,
	Flex,
	HoverCardRoot as HoverCard,
	HoverCardContent,
	HoverCardPositioner,
	HoverCardTrigger,
	HStack,
	PopoverRoot as Popover,
	PopoverBody,
	PopoverContent,
	PopoverHeader,
	PopoverPositioner,
	PopoverTrigger,
	Portal,
	Text,
	VStack
} from '@chakra-ui/react';

export interface EventCardProps {
	title: string;
	timeRange: string;
	assignee: string;
	initials: string;
	color: string; // e.g. "orange", "green"
}

export const EventCard = ({ title, timeRange, assignee, initials, color }: EventCardProps) => {
	const { setView } = usePlannerView();

	return (
		<HoverCard positioning={{ placement: 'right' }}>
			<HoverCardTrigger asChild>
				<Box
					borderWidth="1px"
					borderColor={`${color}.400`}
					bg={`${color}.50`}
					p={2}
					rounded="sm"
					shadow="sm"
					h="full"
					w="full"
					minH="80px"
					overflow="hidden"
					_hover={{ shadow: 'md' }}
					transition="all 0.2s"
					cursor="pointer"
					flex={1}
					role="group"
					position="relative"
				>
					{/* visible on hover: quick access to See all */}
					<Button
						size="xs"
						variant="ghost"
						position="absolute"
						right={2}
						top={2}
						display="none"
						zIndex={2}
						_groupHover={{ display: 'inline-flex' }}
						onClick={() => setView('live')}
						aria-label="See all events for day"
					>
						See all
					</Button>
					<Flex
						mb={1}
						justify="space-between"
					>
						<Flex
							bg="white"
							w={6}
							h={6}
							rounded="full"
							align="center"
							justify="center"
							borderWidth="1px"
							borderColor={`${color}.200`}
						>
							<Text
								fontSize="2xs"
								color={`${color}.600`}
								fontWeight="bold"
							>
								{initials}
							</Text>
						</Flex>
					</Flex>

					<Text
						fontWeight="bold"
						fontSize="sm"
						lineHeight="shorter"
						mb={0.5}
						color="brandBlack"
						truncate
					>
						{title}
					</Text>
					<Text
						fontSize="xs"
						color="gray.500"
						mb={1}
					>
						{timeRange}
					</Text>
					<Text
						fontSize="xs"
						color={`${color}.600`}
						fontWeight="medium"
						truncate
					>
						{assignee}
					</Text>
				</Box>
			</HoverCardTrigger>

			<Portal>
				<HoverCardPositioner>
					<HoverCardContent bg="brandNeutralLight">
						<Popover
							positioning={{ placement: 'right' }}
							lazyMount
						>
							<PopoverTrigger asChild>
								<Button
									w="6.0625rem"
									h="7.1875rem"
									variant="plain"
									color="brandNeutralGrey"
								>
									See all
								</Button>
							</PopoverTrigger>

							<Portal>
								<PopoverPositioner>
									<PopoverContent
										w="xs"
										_focus={{ boxShadow: 'none' }}
									>
										<PopoverHeader>
											<Text fontWeight="bold">{title}</Text>
											<Text
												fontSize="sm"
												color="gray.500"
											>
												{timeRange}
											</Text>
										</PopoverHeader>
										<PopoverBody>
											<VStack
												align="stretch"
												gap={3}
											>
												<HStack
													gap={3}
													align="center"
												>
													<Flex
														bg="white"
														w={8}
														h={8}
														rounded="full"
														align="center"
														justify="center"
														borderWidth="1px"
														borderColor={`${color}.200`}
													>
														<Text
															fontSize="xs"
															color={`${color}.600`}
															fontWeight="bold"
														>
															{initials}
														</Text>
													</Flex>
													<VStack
														align="start"
														gap={0}
													>
														<Text fontWeight="bold">{title}</Text>
														<Text
															fontSize="sm"
															color="gray.500"
														>
															{assignee}
														</Text>
														<Text
															fontSize="xs"
															color="gray.500"
														>
															{timeRange}
														</Text>
													</VStack>
												</HStack>

												<Box
													h="1px"
													bg="gray.100"
												/>

												<Button
													size="sm"
													variant="outline"
													alignSelf="end"
													onClick={() => setView('live')}
												>
													See all
												</Button>
											</VStack>
										</PopoverBody>
									</PopoverContent>
								</PopoverPositioner>
							</Portal>
						</Popover>
					</HoverCardContent>
				</HoverCardPositioner>
			</Portal>
		</HoverCard>
	);
};
