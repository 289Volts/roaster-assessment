import { Box, Button, Flex, Stack, Text, VStack } from '@chakra-ui/react';
import { LuChevronDown, LuPlus } from 'react-icons/lu';
import { CalendarGrid } from './CalendarGrid';
import { DateNavigation } from './DateNavigation';
import { SubHeader } from './SubHeader';

export const Planner = () => {
	return (
		<Stack
			gap={5}
			w="full"
			h="full"
			overflow="hidden"
		>
			{/* Top Row: Title + Main Actions */}
			<Flex
				justify="space-between"
				align="center"
				py="4"
				px="1.875rem"
				borderBlock="1px solid {colors.brandNeutralOutline}"
			>
				<Text
					fontSize="2xl"
					fontWeight="bold"
					color="brandBlack"
				>
					Planner
				</Text>

				<Flex gap={3}>
					<Button
						variant="outline"
						rounded="md"
						color="brandBlack"
						_icon={{ w: '1.125rem', h: '1.125rem' }}
						borderColor="brandNeutralOutline"
						p="3"
						gap={2}
					>
						<LuChevronDown />
						<Text fontSize="sm">Open Days</Text>
					</Button>
					<Button
						variant="outline"
						rounded="md"
						color="brandBlack"
						borderColor="brandNeutralOutline"
						p="3"
						_icon={{ w: '1.125rem', h: '1.125rem' }}
						gap={2}
					>
						<LuPlus />
						<Text fontSize="sm"> Nieuw</Text>
						<LuChevronDown />
					</Button>
				</Flex>
			</Flex>

			{/* Sub Header Toolbar */}
			<VStack
				gap={5}
				pl="1.875rem"
				pr="7"
				w="full"
				align="start"
				flex="1"
				pb={4}
			>
				<SubHeader />

				{/* Navigation */}
				<DateNavigation />

				{/* Content */}
				<Box
					flex={1}
					borderBottomRightRadius="0"
					borderBottomLeftRadius="0"
					w="full"
				>
					<CalendarGrid />
				</Box>
			</VStack>
		</Stack>
	);
};
