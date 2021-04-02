import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MainScreen from './screens/MainScreen'
import ToDo from './screens/ToDo'

function App() {
  return (
    <Router>
      <Header/>
      
      <main className="py-3">

        <Route path='/' component={MainScreen} exact/>
        <Route path='/ToDo' component={ToDo} exact/>
        
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
