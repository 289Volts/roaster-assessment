import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
	theme: {
		tokens: {
			colors: {
				brandNeutralLight: { value: '#f0f5fa' },
				brandNeutralGrey: { value: '#4e5d69' },
				brandSecondary: { value: '#5653fc' },
				brandBlack: { value: '#242424' },
				base800: { value: '#2D3648' }
			}
		}
	}
});

export const system = createSystem(defaultConfig, config);
