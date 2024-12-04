import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import appStore from './utils/appStore';



function App() {
  return (
    <div className="">
      <Provider store={appStore}>
        <Header/> 
        <Body/>
      </Provider>
    </div>
  );
}

export default App;
