import { Provider } from '@/app/components/ui/provider';
import { Grid, GridItem } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<Provider forcedTheme="light">
			<Grid
				templateColumns="16.31rem 1fr"
				templateRows="repeat(2, 1fr)"
				height="100vh"
			>
				<GridItem rowSpan={2}>
					<Sidebar />
				</GridItem>
				<GridItem>
					<Header />
				</GridItem>
				<GridItem>{children}</GridItem>
			</Grid>
		</Provider>
	);
};

export default Layout;
