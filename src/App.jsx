import HomePage from './components/HomePage'
import MetBattle from './components/MetBattle'
import WhoWeAre from './components/WhoWeAre'
import DevOps from './components/DevOps'
import CICD1 from './components/CICD1'
import Cloud from './components/Cloud'
import ProjMgmt from './components/ProjMgmt'
import Email from './components/Email'
import E404 from './components/E404'
import Header from './components/Header'
import Footer from './components/Footer'

import {
  //* BrowserRouter as Router, *//
    HashRouter as Router,
    Route,
    Routes
} from 'react-router-dom'
import ProjMgmtWaterfall from './components/ProjMgmtWaterfall'


function App() {
  return (
    <div class="justify-between">
        <Router hashType="noslash">
            <Header/>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="DevOps" element={<DevOps />} />
                <Route path="CICD1" element={<CICD1 />} />
                <Route path="Cloud" element={<Cloud />} />
                <Route path="ProjMgmt" element={<ProjMgmt />} />
                <Route path="ProjMgmtWaterfall" element={<ProjMgmtWaterfall />} />
                <Route path="MetBattle" element={<MetBattle />} />
                <Route path="WhoWeAre" element={<WhoWeAre />} />
                <Route path="Email" element={<Email />} />
                <Route path="*" element={<E404 />} />
            </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;