import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
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
        {/* <Experience /> */}
        {/* <Tech /> // TODO Change to Cooperations */}
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
