'use client';

// Styles
import './glow.scss';

const Glow = ({ position }: { position?: string }) => {
	return <div className='glow' style={{ transform: position }}></div>;
};

export default Glow;
