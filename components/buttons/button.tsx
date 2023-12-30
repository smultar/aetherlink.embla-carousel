'use client';

// Styles
import './button.scss';

// Functions
import clsx from 'clsx';

// Types
export enum buttons {
	primary = 'primary',
	secondary = 'secondary',
	destructive = 'destructive',
	outline = 'outline',
	ghost = 'ghost',
	transparent = 'transparent',
	link = 'link',
}

type buttonsString = 'primary' | 'secondary' | 'destructive' | 'transparent' | 'outline' | 'ghost' | 'link';

export interface IButton {
	id?: string;
	active?: boolean;
	className?: string;
	children?: React.ReactNode;
	disabled?: boolean;
	fullWidth?: boolean;
	slim?: boolean;
	icon?: boolean;
	special?: boolean;
	variant?: buttonsString;
	onClick?: () => void | void;
	ref?: React.Ref<HTMLButtonElement>;
	faded?: boolean;
}

// Components
const Button = ({ id, className, active, variant, fullWidth, disabled, icon, children, ref, slim, onClick, faded }: IButton) => {
	return (
		<button id={id} ref={ref} className={clsx(className, variant, 'button', { active: active, full: fullWidth, disabled: disabled, slim: slim, icon: icon, faded: faded })} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
