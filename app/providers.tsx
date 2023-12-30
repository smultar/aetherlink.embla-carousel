'use client';
// Purpose: Main provider for the app.
// Path: app/providers.tsx
// Usage: <Providers>...</Providers>

// Unified Settings - Recoil
import { RecoilRoot } from 'recoil';

// Progress Bar - NextJS Toploader
import Progress from 'nextjs-toploader';
import Noise from '@/components/decorations/noise';

// Analytics
import Snow from '@/components/decorations/snow';

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<RecoilRoot>
			<Progress height={2} color='#197CF7' />
			<Snow />
			<Noise />
			{children}
		</RecoilRoot>
	);
};

export default Providers;
