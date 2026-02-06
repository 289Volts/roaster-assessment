'use client';

import {
	Avatar,
	Badge,
	Box,
	Button,
	Flex,
	HStack,
	Icon,
	Input,
	Separator,
	Stack,
	Tabs,
	Text,
	VStack
} from '@chakra-ui/react';
import { Maximize4, SearchNormal1 } from 'iconsax-reactjs';
import { useState } from 'react';
import { HiOutlineFilter } from 'react-icons/hi';

// Mock Data matching the image
const ROSTER_DATA = [
	{
		id: 1,
		name: 'Elijah Oyin',
		initials: 'EO',
		hours: '1158.0hrs',
		overtime: '38.0hrs',
		dateRange: 'Jan 8 - Jan 15',
		status: 'On leave',
		availability: [
			{ day: 'm', status: 'available' },
			{ day: 'di', status: 'available' },
			{ day: 'w', status: 'available' },
			{ day: 'do', status: 'busy' },
			{ day: 'vr', status: 'busy' }
		]
	},
	{
		id: 2,
		name: 'Diane Lane',
		initials: '', // Empty to test fallback or no avatar
		hours: '1158.0hrs',
		overtime: '38.0hrs',
		dateRange: 'Jan 12 - Jan 28',
		status: 'On leave',
		availability: [
			{ day: 'm', status: 'available' },
			{ day: 'di', status: 'available' },
			{ day: 'w', status: 'available' },
			{ day: 'do', status: 'busy' },
			{ day: 'vr', status: 'busy' }
		]
	},
	{
		id: 3,
		name: 'Elijah Oyin', // Duplicate name in image
		initials: 'EO',
		hours: '1158.0hrs',
		overtime: '38.0hrs',
		dateRange: 'Jan 12 - Jan 20',
		status: 'On leave',
		availability: [
			{ day: 'm', status: 'available' },
			{ day: 'di', status: 'available' },
			{ day: 'w', status: 'available' },
			{ day: 'do', status: 'busy' },
			{ day: 'vr', status: 'busy' }
		]
	},
	{
		id: 4,
		name: 'Haico De Gast',
		initials: '',
		hours: '1158.0hrs',
		overtime: '38.0hrs',
		dateRange: 'Jan 2 - Jan 9',
		status: 'On leave',
		availability: [
			{ day: 'm', status: 'available' },
			{ day: 'di', status: 'available' },
			{ day: 'w', status: 'available' },
			{ day: 'do', status: 'busy' },
			{ day: 'vr', status: 'busy' }
		]
	}
];

const AvailabilityDot = ({ status, label }: { status: string; label: string }) => {
	const getColor = (s: string) => {
		if (s === 'available') return 'green.500'; // Green
		if (s === 'busy') return 'orange.400'; // Orange
		return 'gray.300';
	};

	const getBg = (s: string) => {
		if (s === 'available') return 'green.50';
		if (s === 'busy') return 'orange.50';
		return 'gray.50';
	};

	return (
		<VStack gap={0.5}>
			<Text
				fontSize="xs"
				color="brandNeutralGrey"
				fontWeight="medium"
			>
				{label}
			</Text>
			<Box
				w="8px"
				h="8px"
				borderRadius="full"
				bg={status === 'busy' ? 'transparent' : 'green.400'}
				borderColor={status === 'busy' ? 'orange.400' : 'green.400'}
				borderWidth={status === 'busy' ? '2px' : '0px'}
			/>
		</VStack>
	);
};

const RosterCard = ({ item }: { item: (typeof ROSTER_DATA)[0] }) => {
	return (
		<Box
			borderWidth="1px"
			borderColor="brandNeutralOutline"
			borderRadius="xl"
			p={4}
			bg="white"
			w="full"
		>
			<Stack gap={3}>
				{/* Header: Avatar, Name, Leave Status */}
				<Flex
					justify="space-between"
					align="flex-start"
				>
					<HStack gap={3}>
						<Avatar.Root
							size="lg"
							variant="subtle"
							bg="brandNeutralLight"
							color="brandBlack"
						>
							<Avatar.Fallback name={item.name}>{item.initials || undefined}</Avatar.Fallback>
						</Avatar.Root>
						<VStack
							align="flex-start"
							gap={0}
						>
							<Text
								fontWeight="bold"
								fontSize="lg"
								color="brandBlack"
							>
								{item.name}
							</Text>
						</VStack>
					</HStack>
					<Badge
						colorPalette="red"
						variant="subtle"
						bg="brandErrorLight"
						color="brandError"
						px={2}
						py={1}
						borderRadius="full"
						size="sm"
					>
						● On leave
					</Badge>
				</Flex>

				{/* Stats Row */}
				<Flex
					wrap="wrap"
					gap={2}
					align="center"
				>
					<Badge
						variant="subtle"
						bg="brandNeutralLight"
						color="brandNeutralGrey"
						px={2}
						py={1}
						borderRadius="md"
						fontWeight="normal"
					>
						{item.hours}
					</Badge>
					<Badge
						variant="subtle"
						bg="brandNeutralLight"
						color="brandNeutralGrey"
						px={2}
						py={1}
						borderRadius="md"
						fontWeight="normal"
					>
						{item.overtime}
					</Badge>
					<Badge
						variant="subtle"
						bg="brandErrorLight"
						color="brandError"
						px={2}
						py={1}
						borderRadius="md"
						fontWeight="normal"
					>
						{item.dateRange}
					</Badge>
				</Flex>

				{/* Availability Row */}
				<Flex
					justify="flex-end"
					w="full"
					mt={1}
				>
					<HStack gap={3}>
						{item.availability.map((day, idx) => (
							<AvailabilityDot
								key={idx}
								status={day.status}
								label={day.day}
							/>
						))}
					</HStack>
				</Flex>
			</Stack>
		</Box>
	);
};

export const Roster = () => {
	const [activeTab, setActiveTab] = useState('On Leave');

	const tabs = [
		{ name: 'All', count: 32 },
		{ name: 'Available', count: 30 },
		{ name: 'On Leave', count: 4 }
	];

	return (
		<Box
			w="full"
			maxW="345px"
			h="full"
			bg="white"
			rounded="24px"
			borderWidth="2px"
			borderColor="rosterBorder"
			p={5}
		>
			<VStack
				align="stretch"
				gap={0}
			>
				{/* Header */}
				<Flex
					justify="space-between"
					align="center"
				>
					<HStack gap={3}>
						<Icon
							as={Maximize4}
							boxSize={5}
							color="#6C7278"
							// transform="rotate(45deg)"
						/>
						<Separator
							orientation="vertical"
							height="8"
						/>
						<Text
							fontSize="lg"
							fontWeight="bold"
							color="rosterHeader"
						>
							Roster
						</Text>
					</HStack>
					{/* Expand Icon - The design shows two arrows pointing out. Maximize might work. */}
				</Flex>
				<Separator
					mt={6}
					// orientation="vertical"
					height="1"
				/>
				{/* Search & Filter */}
				<HStack
					my={5}
					gap={2}
				>
					<Box
						pos="relative"
						flex={1}
					>
						<Input
							placeholder="Search"
							borderRadius="lg"
							borderColor="brandNeutralOutline"
							bg="white"
							_placeholder={{ color: 'brandNeutralGrey' }}
							pl={10}
							h="10"
						/>
						<Box
							pos="absolute"
							left={3}
							top="50%"
							transform="translateY(-50%)"
							color="brandNeutralGrey"
						>
							<SearchNormal1 size="18" />
						</Box>
					</Box>
					<Button
						variant="outline"
						borderColor="brandNeutralOutline"
						color="brandNeutralGrey"
						borderRadius="lg"
						h="11"
						w="11"
						p={0}
					>
						<HiOutlineFilter />
					</Button>
				</HStack>

				{/* Tabs */}
				<Tabs.Root
					lazyMount
					unmountOnExit
					defaultValue="tab-1"
					onValueChange={(e) => setActiveTab(e.value)}
					value={activeTab}
				>
					<Tabs.List>
						{tabs.map((tab, i) => {
							const isActive = activeTab === tab.name;
							console.log('activeTab', activeTab, tab.name, isActive);
							return (
								<Tabs.Trigger
									value={tab.name}
									key={tab.name}
								>
									<HStack
										gap={2}
										flexShrink={0}
									>
										<Text
											color={isActive ? 'brandSecondary' : 'brandNeutralGrey'}
											fontWeight={isActive ? 'bold' : 'normal'}
										>
											{tab.name}
										</Text>
										<Badge
											borderRadius="full"
											px={2}
											bg={isActive ? 'brandSecondaryLight' : 'brandNeutralLight'}
											color={isActive ? 'brandSecondary' : 'brandNeutralGrey'}
										>
											{tab.count}
										</Badge>
									</HStack>
								</Tabs.Trigger>
							);
						})}
					</Tabs.List>
					<Tabs.Content value="tab-1">Tab 1: Content</Tabs.Content>
					<Tabs.Content value="tab-2">Tab 2: Content</Tabs.Content>
					<Tabs.Content value="tab-3">Tab 3: Content</Tabs.Content>
				</Tabs.Root>

				{/* List */}
				<VStack
					mt={5}
					gap={4}
					overflowY="auto"
					maxH="calc(100vh - 250px)" // Adjust based on viewport
					align="stretch"
					css={{
						'&::-webkit-scrollbar': {
							width: '4px'
						},
						'&::-webkit-scrollbar-track': {
							width: '6px'
						},
						'&::-webkit-scrollbar-thumb': {
							background: '#E2E4E9',
							borderRadius: '24px'
						}
					}}
				>
					{ROSTER_DATA.map((item, idx) => (
						<RosterCard
							key={item.id + idx}
							item={item}
						/>
					))}
				</VStack>
			</VStack>
		</Box>
	);
};
