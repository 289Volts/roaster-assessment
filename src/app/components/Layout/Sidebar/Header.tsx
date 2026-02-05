import { HStack, IconButton } from '@chakra-ui/react';
import logo from '@root/public/assets/icons/logo.png';
import { HamburgerMenu } from 'iconsax-reactjs';
import Image from 'next/image';

type TSidebarHeaderProps = {
	onToggle?: () => void;
};

const SidebarHeader = ({ onToggle }: TSidebarHeaderProps) => (
	<HStack
		justifyContent="space-between"
		px={3}
		py={3}
	>
		<Image
			src={logo}
			alt="Excellent care clinics"
			width={140}
			height={36}
		/>
		<IconButton
			aria-label="Toggle sidebar"
			variant="ghost"
			onClick={onToggle}
		>
			<HamburgerMenu
				size="20"
				color="#1F2937"
			/>
		</IconButton>
	</HStack>
);

export default SidebarHeader;
