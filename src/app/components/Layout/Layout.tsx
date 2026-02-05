import { Provider } from '@/app/components/ui/provider';
import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<Provider forcedTheme="light">
			<div>
				<Sidebar />
				{children}
			</div>
		</Provider>
	);
};

export default Layout;
