import './Home.css'
import logo from '../images/logo.svg'
import hero from '../images/image-hero.jpg'
import interactive from '../images/image-interactive.jpg'
import { NavLink } from 'react-router-dom';
import Nav from './Nav';

const Home = () => {
  return (
    <>
     <section className="main">
      <header>
        <img src={logo} alt="" />
        <Nav text='cuenta'/>
      </header>

      <div className="description-header">immersive experiences that deliver</div>
    </section>

    <article className="container-vr">
      <div className="img-vr">
        <img src={interactive} alt="" />
      </div>

      <div className="text-vr">
        <p className="first">the leader in interactive vr</p>
        <p>
          Founded in 2011, Loopstudios has been producing world-className virtual
          reality projects for some of the best comapnies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to thier brand
        </p>
      </div>
    </article>
    </>
  );
};

export default Home;
