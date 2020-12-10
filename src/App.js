import {Provider} from 'react-redux'
import './App.css';
import CakeComponent from './components/CakeComponent'
import HooksCakeComponent from './components/HooksCakeComponent'
import IceCreamComponent from './components/IceCreamComponent'
import NewCakeComponent from './components/NewCakeComponent'
import ItemComponent from './components/ItemComponent'
import UsersComponent from './components/UsersComponent'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemComponent cake />
        <ItemComponent />
        <HooksCakeComponent />
        <CakeComponent />
        <IceCreamComponent />
        <NewCakeComponent /> */}
        <UsersComponent />
      </div>
    </Provider>
  );
}

export default App;
