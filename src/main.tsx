import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Root } from './pages/Root.tsx';
import { AppProviders } from './providers/AppProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AppProviders>
			<Root />
		</AppProviders>
	</StrictMode>,
);
