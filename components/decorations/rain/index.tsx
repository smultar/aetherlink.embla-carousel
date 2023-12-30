'use client';
import { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';

const Rain = () => {
	const [images, setImages] = useState<any>([]);
	const isBrowser = typeof window !== 'undefined';

	useEffect(() => {
		// Prevent SSR from breaking the app.
		if (!isBrowser) return;

		const snowflakeA = document.createElement('img');
		const snowflakeB = document.createElement('img');

		snowflakeA.src = 'https://cdn.aetherlink.app/svgs/raindrop.svg';
		snowflakeB.src = 'https://cdn.aetherlink.app/svgs/raindrop.svg';

		setImages([snowflakeA, snowflakeB]);
	}, [isBrowser]);

	return <Snowfall style={{ position: 'fixed', width: '100%', height: '100%', zIndex: 9999 }} snowflakeCount={20} images={images} radius={[5, 5]} wind={[0, 0]} speed={[10, 10]} />;
};

export default Rain;
