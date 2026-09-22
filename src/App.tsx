import { MainPageType } from '.';
import MainPage from './pages/MainPage';

function App({ placesCount }: MainPageType) {
  return <MainPage placesCount={placesCount} />;
}

export default App;
