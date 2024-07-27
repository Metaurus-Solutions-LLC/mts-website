import HomePage from './components/HomePage'
import MetBattle from './components/MetBattle'
import Email from './components/Email'
import E404 from './components/E404'
import Header from './components/Header'
import Footer from './components/Footer'

import {
    BrowserRouter as Router,
    Route,
    Routes

} from 'react-router-dom'

function App() {
  return (
    <div class="justify-between">
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="MetBattle" element={<MetBattle />} />
                <Route path="Email" element={<Email />} />
                <Route path="*" element={<E404 />} />
            </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;