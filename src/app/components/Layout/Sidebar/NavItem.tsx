import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';

type TNavItemProps = {
	label: string;
	icon?: React.ReactNode;
	active?: boolean;
	onClick?: () => void;
	indent?: boolean;
};

const NavItem = ({ label, icon, active, onClick, indent }: TNavItemProps) => (
	<HStack
		as="button"
		onClick={onClick}
		gap={3}
		align="center"
		px={4}
		py={2}
		width="100%"
		borderLeftWidth={active ? '3px' : 0}
		borderLeftColor={active ? 'blue.500' : 'transparent'}
		bg={active ? 'var(--color-brandNeutralLight)' : 'transparent'}
		_hover={{ bg: active ? 'var(--color-brandNeutralLight)' : 'gray.50' }}
	>
		<Box
			color="var(--color-foreground)"
			ml={indent ? 4 : 0}
		>
			{icon}
		</Box>
		<Text
			fontSize="sm"
			color={active ? 'blue.600' : 'gray.700'}
		>
			{label}
		</Text>
	</HStack>
);

export default NavItem;
