import HomePage from './components/HomePage'
import MetBattle from './components/MetBattle'
import DevOps from './components/DevOps'
import Cloud from './components/Cloud'
import ProjMgmt from './components/ProjMgmt'
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
                <Route path="DevOps" element={<DevOps />} />
                <Route path="Cloud" element={<Cloud />} />
                <Route path="ProjMgmt" element={<ProjMgmt />} />
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