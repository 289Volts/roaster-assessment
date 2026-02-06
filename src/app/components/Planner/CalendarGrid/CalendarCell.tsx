import { Box, BoxProps, Button } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface CalendarCellProps {
	children?: ReactNode;
	showSeeAll?: boolean;
	bg?: string;
	borderColor?: string;
	borderLeft?: boolean;
	borderRight?: boolean;
	borderTop?: boolean;
	borderBottom?: boolean;
	style?: BoxProps;
}

export const CalendarCell = ({
	children,
	showSeeAll,
	bg = 'transparent',
	borderColor = 'brandNeutralOutline',
	borderLeft = false,
	borderRight = false,
	borderTop = false,
	borderBottom = false,
	style
}: CalendarCellProps) => {
	return (
		<Box
			w="full"
			h="full"
			borderLeftWidth={borderLeft ? '1px' : '0'}
			borderRightWidth={borderRight ? '1px' : '0'}
			borderTopWidth={borderTop ? '1px' : '0'}
			borderBottomWidth={borderBottom ? '1px' : '0'}
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
