import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Works, StarsCanvas } from "./components";
import Information from './Banner';
import Imprint from "./components/Imprint";

const App = () => {

  return (
    <BrowserRouter>
      <Information />
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          {/* <iframe
            name="3-dimage"
            width="800"
            height="600"
            src="https://make3d.app/render?url=https%3A%2F%2Fi.imgur.com%2FUv4RsVT.png&size=256"
            scrolling="no"
            frameborder="0" /> */}
        </div>
        <About />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Imprint/>
      </div>
    </BrowserRouter>
  );
}

export default App;
