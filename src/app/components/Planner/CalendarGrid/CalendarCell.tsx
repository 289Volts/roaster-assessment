import { Box, BoxProps, Button } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface CalendarCellProps {
	children?: ReactNode;
	showSeeAll?: boolean;
	bg?: string;
	borderColor?: string;
	style?: BoxProps;
}

export const CalendarCell = ({
	children,
	showSeeAll,
	bg = 'transparent',
	borderColor = 'brandNeutralOutline',
	style
}: CalendarCellProps) => {
	return (
		<Box
			w="full"
			h="full"
			borderRightWidth="1px"
			borderBottomWidth="1px"
			borderColor={borderColor}
			bg={bg}
			position="relative"
			display="flex"
			gap={1}
			{...style}
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
