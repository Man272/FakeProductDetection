import './App.css';
import { Helmet } from 'react-helmet';
import BCBG from './img/BCBG.png';
import Page1 from './project/page1';
import Page2 from './project/page2';
import Page3 from './project/page3';
import Page4 from './project/page4';
import Footer from './project/footer';
import Banner from './project/banner';

function App() {
  return (
    <div className='app'>
    <Helmet>
      <title>FAKE PRODUCT DETECTION</title>
      <link rel="icon" type="image/png" href={BCBG} />
    </Helmet>
        <Banner/>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Footer />
    </div>
  );
}

export default App;
