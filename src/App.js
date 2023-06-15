import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Main';
import HumbergerMenu from './pages/HumbergerMenu';
import { store } from './redux/store';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <BrowserRouter>
          <Provider store={store}>
            <Main/>
          </Provider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
