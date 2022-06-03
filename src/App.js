import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/header/header.component";
import Main from "./components/layout/containers/main.component";
import Footer from "./components/layout/footer/footer.component";
import Home from "./components/routes/home.component";
import About from "./components/routes/about.component";
import Gallery from "./components/routes/gallery.component";
import Services from "./components/routes/services.component";
import Pricing from "./components/routes/pricing.component";
import Blog from "./components/routes/blog.component";
import Contact from "./components/routes/contact.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
