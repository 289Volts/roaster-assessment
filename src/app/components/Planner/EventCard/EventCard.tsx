import { Box, Flex, Text } from '@chakra-ui/react';

export interface EventCardProps {
	title: string;
	timeRange: string;
	assignee: string;
	initials: string;
	color: string; // e.g. "orange", "green"
}

export const EventCard = ({ title, timeRange, assignee, initials, color }: EventCardProps) => {
	return (
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
		>
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
	);
};
