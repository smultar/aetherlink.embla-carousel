'use client';

import Button, { ButtonType } from '@/components/buttons/button';
import Image from 'next/image';

type props = {
	error: Error;
	reset: () => void;
};

const Error = ({ error, reset }: props) => {
	return (
		<div className='error-catch'>
			<div className='catch'>
				<Image src='https://cdn.aetherlink.app/svgs/risk.svg' width={100} height={100} alt='Error' />
				<h1>
					It seems we&apos;ve stumbled upon a <span>bug</span>.
				</h1>
				<p>Feel free to share with our trusty developers by sending them the following error message:</p>
				<div className='message'>
					<p className='problem'>
						<Image src='https://cdn.aetherlink.app/svgs/bug.svg' width={12} height={12} alt='Error' />
						{error.message}
					</p>
					<p className='digest'>{error.stack}</p>
				</div>
			</div>
			<div className='error-actions'>
				<Button onClick={reset} text='Reload' active={true}></Button>
				<Button onClick={reset} text='Exit' active={true}></Button>
			</div>
		</div>
	);
};

export default Error;
