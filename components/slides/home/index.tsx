'use client';

// Styles
import './home-carousel.scss';

// Components
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

// Functions

// Types
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel-react';

// Plugins
import Autoplay from 'embla-carousel-autoplay';
import Button from '@/components/buttons/button';
import { icons } from '@/lib/types/icons';

// Hooks
import { useCallback, useEffect } from 'react';
import { useDotButton } from '@/lib/hooks/use-dot-button';

type author = {
	id: string;
	label: string;
	avatar: string;
	banner?: string;
};

type mods = {
	id: string;
	name: string;
	description: string;
	author: author;
	images: string[];
};

const overrideMods: mods[] = [
	{
		id: '1',
		name: 'Mod Name',
		description: 'Mod Description',
		author: {
			id: '1',
			label: 'Author Name',
			avatar: 'https://cdn.aetherlink.app/6942763530307534848/avatar.png',
		},
		images: ['https://cdn.aetherlink.app/6942763530307534848/7045085258634788864/7051195698947325952.png'],
	},
	{
		id: '2',
		name: 'Mod Name',
		description: 'Mod Description',
		author: {
			id: '1',
			label: 'Author Name',
			avatar: 'https://cdn.aetherlink.app/6942763530307534848/avatar.png',
		},
		images: ['https://cdn.aetherlink.app/6942763530307534848/7045085258634788864/7051195698947325952.png'],
	},
	{
		id: '3',
		name: 'Mod Name',
		description: 'Mod Description',
		author: {
			id: '1',
			label: 'Author Name',
			avatar: 'https://cdn.aetherlink.app/6942763530307534848/avatar.png',
		},
		images: ['https://cdn.aetherlink.app/6942763530307534848/7045085258634788864/7051195698947325952.png'],
	},
];

const HomeCarousel = ({ mods }: { mods?: mods[] }) => {
	const [ref, Carousel] = useEmblaCarousel({ loop: true }, [Autoplay()]);

	const onButtonClick = useCallback((Carousel: EmblaCarouselType) => {
		const { autoplay } = Carousel.plugins();
		if (!autoplay) return;
		if (autoplay.options.stopOnInteraction !== false) autoplay.stop();
	}, []);

	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(Carousel, onButtonClick);

	return (
		<div className='home-carousel-container'>
			<div className='home-carousel' ref={ref}>
				<div className='carousel-container'>
					{overrideMods.map((mod, index) => (
						<div className='carousel-slide' key={mod.id}>
							<div className='carousel-fade'></div>
							<div className='carousel-details'>
								<div className='author'>
									<Image className='author-image' src={mod.author.avatar} width={32} height={32} alt={`${mod.author.label}'s avatar`} />
									<p className='author-name'>{mod.author.label}</p>
								</div>
								<div className='name'>
									<p className='label'>{mod.name}</p>
								</div>
								<div className='row'>
									<Button variant='transparent' slim>
										<Image src={icons.avatar} width={14} height={14} alt='View' />
										Category
									</Button>
									<Button variant='transparent' slim>
										<Image src={icons.paid} width={14} height={14} alt='View' />
										Paid
									</Button>
								</div>
								<div className='row'>
									<Button variant='primary'>Download</Button>
									<Button variant='outline'>View</Button>
								</div>
							</div>
							<div className='images'>
								{mod.images.map((image, index) => (
									<div className='images-container' key={index}>
										<Image className='background' src={image} layout='fill' alt={`${mod.name} image ${index + 1} of ${mod.images.length}`} />
										<Image className='image' src={image} layout='fill' alt={`${mod.name} image ${index + 1} of ${mod.images.length}`} />
									</div>
								))}
							</div>
						</div>
					))}
				</div>
				<div className='dots'>
					{scrollSnaps.map((_, index) => (
						<Button slim icon key={index} onClick={() => onDotButtonClick(index)} active={selectedIndex == index}></Button>
					))}
				</div>
			</div>
		</div>
	);
};

export default HomeCarousel;
