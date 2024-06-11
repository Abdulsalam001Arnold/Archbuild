import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Navbar from './components/navbar';
import Get from './Pages/Project-detail';
import Blog from './Pages/Blog';
import SlidePage from './Pages/Get';
import AboutPage from './Pages/About';
import People from './Pages/People';
import GetPeople from './Pages/People-detail';
import CeoMessage from './Pages/Message';
import Datapage from './Pages/Data'
import  MemberPage from './Pages/Member'
import Contactpage from './Pages/Contact';
import Structurepage from './Pages/Structure';
import Profilepage from './Pages/Firm';
import ProjectHistory from './Pages/History';
import SocialResponsibility from './Pages/Social'
import CareerPage from './Pages/Careers'
import Researchpage from './Pages/Research'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/projects/:projectId' element={<Get/>}/>
            <Route path='/blog' element={<SlidePage/>}/>
            <Route path='/blog/:slideId' element={<Blog/>}/>
            <Route path='/aboutpage' element={<AboutPage/>}/>
            <Route path='/people' element={<People/>}/>
            <Route path='/people/:peopleId' element={<GetPeople/>}/>
            <Route path='/about/ceo-message' element={<CeoMessage/>}/>
            <Route path='/about/Corporate-data' element={<Datapage/>}/>
            <Route path='/about/Board-members' element={<MemberPage/>}/>
            <Route path='/about/Corporate-Structure' element={<Structurepage/>}/>
            <Route path='/about/firm-profile' element={<Profilepage/>}/>
            <Route path='/about/projects_history' element={<ProjectHistory/>}/>
            <Route path='/about/social_responsibility' element={<SocialResponsibility/>}/>
            <Route path='/contact' element={<Contactpage/>}/>
            <Route path='/careers' element={<CareerPage/>}/>
            <Route path='/research-insights' element={<Researchpage/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
