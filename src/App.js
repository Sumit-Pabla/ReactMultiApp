import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MainScreen from './screens/MainScreen'
import ToDo from './screens/ToDo'
import Dictionary from './screens/Dictionary'

function App() {
  return (
    <Router>
      <Header/>
      
        <Route path='/' component={MainScreen} exact/>
        <Route path='/ToDo' component={ToDo} exact/>
        <Route path='/Dictionary' component={Dictionary} exact/>

      <Footer/>
    </Router>
  );
}

export default App;
