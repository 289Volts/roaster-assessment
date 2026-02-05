import { Box, Button } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface CalendarCellProps {
	children?: ReactNode;
	showSeeAll?: boolean;
	bg?: string;
	borderColor?: string;
}

export const CalendarCell = ({
	children,
	showSeeAll,
	bg = 'transparent',
	borderColor = 'brandNeutralOutline'
}: CalendarCellProps) => {
	return (
		<Box
			w="full"
			h="full"
			borderRightWidth="1px"
			borderBottomWidth="1px"
			borderColor={borderColor}
			bg={bg}
			p={1}
			position="relative"
			display="flex"
			flexDirection="column"
			gap={1}
		>
			{children}

			{showSeeAll && (
				<Button
					size="xs"
					variant="surface"
					colorPalette="gray"
					w="full"
					h="auto"
					py={1}
					fontSize="2xs"
				>
					See all
				</Button>
			)}
		</Box>
	);
};
