
import {Routes,Route} from 'react-router-dom';
/** Import all Components **/
import Password from './components/Password';
import PageNotFound from './components/PageNotFound';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Register from './components/Register';
import Reset from './components/Reset';
import Username from './components/Username';
const App =()=>(
    
<Routes>
  <Route exact path="/"  element={<Username/>} />
  <Route path="/register" exact element={<Register/>} />
    <Route exact path="/Profile"  element={<Profile/>} />
  <Route path="/Password" exact element={<Password/>} />
    <Route exact path="/Reset"  element={<Reset/>} />
  <Route path="/Recovery" exact element={<Recovery/>} />
    <Route exact path="*"  element={<PageNotFound/>} />
</Routes>

  );


export default App;
