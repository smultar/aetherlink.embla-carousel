import './layout.scss';

// Providers
import Providers from './providers';

//

const ApplicationLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
};

export default ApplicationLayout;
