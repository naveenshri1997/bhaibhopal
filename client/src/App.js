import { Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// frontend
import Web from './components/Web';
import Law from './components/Law/Law';
import SinglePageLaw from './components/Law/SinglePageLaw';

import Judgement from './components/Judgement/Judgement';
import SingleJudgement from './components/Judgement/Singlejudgement';

import Blog from './components/Blog/Blog';
import SingleBlog from './components/Blog/SingleBlog';

import Template from './components/Template/Template';
import SingleTemplate from './components/Template/SingleTemplate';

import Adminlogin from './components/Dashboard/Adminlogin';
import Dashboard from './components/Dashboard/Dashboard';
import Privateroute from './components/Privateroute';
import AddLaw from './components/Dashboard/Laws/AddLaws';
import ShowLaw from './components/Dashboard/Laws/ShowLaws';
import EditLaw from './components/Dashboard/Laws/EditLaws';

import Addjudgement from './components/Dashboard/Judgement/AddJudgement';
import ShowJudgement from './components/Dashboard/Judgement/ShowJudgement';
import EditJudgement from './components/Dashboard/Judgement/EditJudgement';

import AddSlider from './components/Dashboard/Slider/AddSlider';
import ShowSlider from './components/Dashboard/Slider/ShowSlider';
import EditSlider from './components/Dashboard/Slider/EditSlider';

import AddTemplate from './components/Dashboard/Template/AddTemplate';
import ShowTemplate from './components/Dashboard/Template/ShowTemplate';
import EditTemplate from './components/Dashboard/Template/EditTemplate';

import AddAbout from './components/Dashboard/About/AddAbout';
import ShowAbout from './components/Dashboard/About/ShowAbout';
import EditAbout from './components/Dashboard/About/EditAbout';

import AddBlog from './components/Dashboard/Blog/AddBlog';
import ShowBlog from './components/Dashboard/Blog/ShowBlog';
import EditBlog from './components/Dashboard/Blog/EditBlog';

import AddContact from './components/Dashboard/Contact/AddContact';
import ShowContact from './components/Dashboard/Contact/ShowContact';

import AddMeeting from './components/Dashboard/Meeting/AddMeeting';
import ShowMeeting from './components/Dashboard/Meeting/ShowMeeting';
import EditMeeting from './components/Dashboard/Meeting/EditMeeting';

import AddGallery from './components/Dashboard/Gallery/AddGallery';
import ShowGallery from './components/Dashboard/Gallery/ShowGallery';
import EditGallery from './components/Dashboard/Gallery/EditGallery';
import Gallery from './components/Gallery/Gallery';

import AddHero from './components/Dashboard/Hero/AddHero';
import ShowHero from './components/Dashboard/Hero/ShowHero';
import EditHero from './components/Dashboard/Hero/EditHero';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Web />}></Route>
        <Route path='/law' element={<Law />}></Route>
        <Route path='/law/:lawId' element={<SinglePageLaw />} />

        <Route path='/judgement' element={<Judgement />}></Route>
        <Route path='/judgement/:id' element={<SingleJudgement />}></Route>

        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/blog/:id' element={<SingleBlog />}></Route>

        <Route path='/template' element={<Template/>}></Route>
        <Route path='/template/:id' element={<SingleTemplate />}></Route>
        
        <Route path='/gallery' element={<Gallery/>}></Route>

        <Route path="/adminlogin" element={<Adminlogin />}></Route>
        {/* admin  */}
        <Route path='/' element={<Privateroute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addlaw" element={<AddLaw />} />
          <Route path="/showlaw" element={<ShowLaw />} />
          <Route path="/updatelaw/:id" element={<EditLaw />} />

          <Route path="/addjudgement" element={<Addjudgement />} />
          <Route path="/showjudgement" element={<ShowJudgement />} />
          <Route path="/updatejudgement/:id" element={<EditJudgement />} />

          <Route path="/addslider" element={<AddSlider />} />
          <Route path="/showslider" element={<ShowSlider />} />
          <Route path="/updateslider/:id" element={<EditSlider />} />

          <Route path="/addtemplate" element={<AddTemplate />} />
          <Route path="/showtemplate" element={<ShowTemplate />} />
          <Route path="/updatetemplate/:id" element={<EditTemplate />} />

          <Route path="/addabout" element={<AddAbout />} />
          <Route path="/showabout" element={<ShowAbout />} />
          <Route path="/updateabout/:id" element={<EditAbout />} />

          <Route path="/addblog" element={<AddBlog />} />
          <Route path="/showblog" element={<ShowBlog />} />
          <Route path="/updateblog/:id" element={<EditBlog />} />

          <Route path="/addcontact" element={<AddContact />} />
          <Route path="/showcontact" element={<ShowContact />} />

          <Route path="/addmeeting" element={<AddMeeting />} />
          <Route path="/showmeeting" element={<ShowMeeting />} />
          <Route path="/updatemeeting/:id" element={<EditMeeting />} />

          <Route path="/addgallery" element={<AddGallery />} />
          <Route path="/showgallery" element={<ShowGallery />} />
          <Route path="/updategallery/:id" element={<EditGallery />} />

          <Route path="/addhero" element={<AddHero />} />
          <Route path="/showhero" element={<ShowHero />} />
          <Route path="/updatehero/:id" element={<EditHero />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
