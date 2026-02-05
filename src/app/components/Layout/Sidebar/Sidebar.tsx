import { Box, VStack } from '@chakra-ui/react';
import { FiBook, FiCalendar, FiFileText, FiGlobe, FiHome, FiSettings } from 'react-icons/fi';
import SidebarHeader from './Header';
import NavItem from './NavItem';
import SidebarSection from './SidebarSection';

const Sidebar = () => (
	<Box
		as="aside"
		paddingTop="6"
		maxWidth="260px"
		borderRightWidth="1px"
		borderRightColor="gray.100"
		height="100vh"
		bg="transparent"
	>
		<VStack
			align="stretch"
			gap="2.3125rem"
			height="100%"
		>
			<SidebarHeader />
			<VStack
				align="stretch"
				gap={0}
				mt={2}
			>
				<NavItem
					icon={<FiHome />}
					label="Startpagina"
				/>
				<SidebarSection title="Rooster">
					<NavItem
						icon={<FiCalendar />}
						label="Mijn Rooster"
					/>
					<NavItem
						icon={<FiCalendar />}
						label="Planner"
						active
					/>
					<NavItem
						icon={<FiSettings />}
						label="Instellingen"
					/>
				</SidebarSection>
				<NavItem
					icon={<FiFileText />}
					label="My to do Protocols"
				/>
				<NavItem
					icon={<FiFileText />}
					label="Document Management"
				/>
				<NavItem
					icon={<FiGlobe />}
					label="Department News"
				/>
				<NavItem
					icon={<FiBook />}
					label="Knowledge Base"
				/>
				<NavItem
					icon={<FiFileText />}
					label="General News"
				/>
			</VStack>
		</VStack>
	</Box>
);

export default Sidebar;
