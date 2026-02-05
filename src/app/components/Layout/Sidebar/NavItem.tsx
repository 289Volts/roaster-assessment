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
		p={3}
		width="100%"
		borderLeftWidth={active ? '3px' : 0}
		borderLeftColor={active ? 'blue.500' : 'transparent'}
		bg={active ? 'var(--color-brandNeutralLight)' : 'transparent'}
		_hover={{ bg: active ? 'var(--color-brandNeutralLight)' : 'gray.50' }}
	>
		<Box
			color="{colors.base800}"
			w="1.0625rem"
			h="1.0625rem"
			display="flex"
			_icon={{ w: 'inherit', h: 'inherit' }}
			alignItems="center"
			justifyContent="center"
		>
			{icon}
		</Box>
		<Text
			fontSize="md"
			fontWeight="medium"
			color={active ? '{colors.brandSecondary}' : '{colors.brandNeutralGrey}'}
		>
			{label}
		</Text>
	</HStack>
);

export default NavItem;
