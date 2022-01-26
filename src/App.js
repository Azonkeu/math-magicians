import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Calculate from './components/Calculator';

const App = () => (
  <Router>
    <nav className="nav">
      <Link to="/Home" className="title">Math Magicians</Link>
      <Link to="/" className="link">Home</Link>
      <Link to="/Calculator" className="link">Calculator</Link>
      <Link to="/Quote" className="link">Quote</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="Calculator" element={<Calculator />} />
      <Route path="Quote" element={<Quote />} />
    </Routes>
  </Router>
);

const Home = () => (
  <section className="section-one">
    <h1 className="section-title">Welcome to our page!</h1>
    <p className="textx">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae fringilla eros. Praesent ullamcorper consequat elit, eu convallis dolor commodo ac. Nunc eu turpis laoreet, suscipit nunc suscipit, laoreet mauris. Aliquam erat volutpat. Sed mollis posuere tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam finibus nibh placerat convallis consequat. Curabitur aliquet placerat metus, nec dignissim odio tincidunt quis. Pellentesque blandit est et mi finibus pharetra. Praesent ac ligula ullamcorper, imperdiet purus sed, bibendum purus. Proin ex eros, porttitor ut purus eu, laoreet varius nisl.</p>
    <p className="textx">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae fringilla eros. Praesent ullamcorper consequat elit, eu convallis dolor commodo ac. Nunc eu turpis laoreet, suscipit nunc suscipit, laoreet mauris. Aliquam erat volutpat. Sed mollis posuere tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam finibus nibh placerat convallis consequat. Curabitur aliquet placerat metus, nec dignissim odio tincidunt quis. Pellentesque blandit est et mi finibus pharetra. Praesent ac ligula ullamcorper, imperdiet purus sed, bibendum purus. Proin ex eros, porttitor ut purus eu, laoreet varius nisl.</p>
  </section>
);

const Calculator = () => (
  <section className="section-two">
    <h1 className="section-title">Let&apos;s do some math!</h1>
    <Calculate />
  </section>
);

const Quote = () => (
  <section className="section-three">
    <p className="text">Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. -William Paul Thurston</p>
  </section>
);

export default App;
