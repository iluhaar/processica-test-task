import './App.css';
import { Chat, Login, MainPage, Profile } from './Components';
import ChatState from './Context/ChatState'
import { Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <ChatState>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/chat/:Id' exact component={Chat}/>
          <Route path='/main' exact component={MainPage}/>
          <Route path='/profile' exact component={Profile}/>
        </Switch>
      </ChatState>
    </div >
  );
}

export default App;
