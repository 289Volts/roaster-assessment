import { HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

type TSidebarSectionProps = {
	title: string;
	children?: React.ReactNode;
};

const SidebarSection = ({ title, children }: TSidebarSectionProps) => (
	<VStack
		align="stretch"
		gap={1}
		mt={2}
	>
		<HStack
			px={4}
			py={2}
			justify="space-between"
		>
			<Text
				fontSize="sm"
				fontWeight="semibold"
				color="gray.600"
			>
				{title}
			</Text>
		</HStack>
		<VStack
			gap={0}
			align="stretch"
		>
			{children}
		</VStack>
	</VStack>
);

export default SidebarSection;
