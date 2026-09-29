import { MainPageType } from './types';
import MainPage from './pages/main-page';

function App({ placesCount }: MainPageType) {
  return <MainPage placesCount={placesCount} />;
}

export default App;
