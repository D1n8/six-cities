import { MainPageType } from '.';
import MainPage from './MainPage/MainPage';

function App({ placesCount }: MainPageType) {
  return <MainPage placesCount={placesCount} />;
}

export default App;
