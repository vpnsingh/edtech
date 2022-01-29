import './App.css';
import Base from './common/Base';
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <div className="App">
      <p className='text-success my-1'>
        Welcome to Edtech - Enjoy <strong>20% Off</strong> on all courses !!!
      </p>
      <Provider store={store}>
        <Base />
      </Provider>
    </div>
  );
}

export default App;
