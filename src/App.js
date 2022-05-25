import logo from './images/circle.png';
import logo_blue from './images/logo_blue.png';
import Shlang from "./images/shlang.png";
import './Css/style.css';
import Banner from './Components/Banner';
import AboutUS from './Components/AboutUS';
import Activity from './Components/Activity';
import Expert from './Components/Expert';
import Services from './Components/Services';
import CarouselLine from './Components/CarouselLine';
import Robot from './Components/Robot';
import Partners from './Components/Partners';
import Form from './Components/Form';
import Formblock from './Components/Formblock';

// const title_info = [
//   {info: `Kompyuter savodxonligi`},
//   {info: `Blender`},
//   {info: `3Ds max & Autocad kurslari`},
//   {info: `IT  dasturlash / Mobile dasturlash `},
//   {info: `IT foundation`},
//   {info: `Blogerlik `},
//   {info: `Mexatronika`},
//   {info: `Interyer dizayn`},
//   {info: `Grafik Dizayn / Web dizayn`},
//   {info: `Video montaj  / Moushn grafika `},
//   {info: `Robototexnika kurslari  `},
//   {info: `Lego Mindstorm (bolalar uchun)`},
//   {info: `Aviasport bolalar uchun`},
// ]
function App() {
  return (
    <div className="App">
      <Banner info="Samarqand viloyati yoshlar texnoparki" image2={Shlang}  image={logo_blue} button="zamonaviy  ilm  poydevori !" />
      <AboutUS/>
      <Activity/>
      <Expert/>
      <Services/>
      <CarouselLine/>
      <Robot/>
      <Partners />
      <Formblock/>
    </div>
  );
}

export default App;
