'use client';
import './loading.scss';
import Image from 'next/image';

const Loading = () => {
	return (
		<>
			<div className='container'>
				<div className='background-gradient'></div>

				<div className='content-loading'>
					<div className='cube-wrapper'>
						<div className='cube'>
							<div className='cube-faces'>
								<div className='cube-face shadow'>
									<Image src='https://cdn.aetherlink.app/svgs/logo.svg' width={100} height={100} alt='Aetherlink Logo' />
								</div>
								<div className='cube-face bottom'></div>
								<div className='cube-face top'></div>
								<div className='cube-face left'></div>
								<div className='cube-face right'></div>
								<div className='cube-face back'></div>
								<div className='cube-face front'></div>
							</div>
						</div>
					</div>
				</div>
				<div className='content-loading' style={{ transform: 'scale(2) translateY(-10px)', zIndex: 0, opacity: 0.0175, position: 'absolute' }}>
					<div className='cube-wrapper'>
						<div className='cube'>
							<div className='cube-faces'>
								<div className='cube-face shadow'></div>
								<div className='cube-face bottom'></div>
								<div className='cube-face top'></div>
								<div className='cube-face left'></div>
								<div className='cube-face right'></div>
								<div className='cube-face back'></div>
								<div className='cube-face front'></div>
							</div>
						</div>
					</div>
				</div>
				<div className='lstat'>
					<p className='build'>Loading</p>
					<p className='title'>Aether Link</p>
				</div>
			</div>
		</>
	);
};

export default Loading;
