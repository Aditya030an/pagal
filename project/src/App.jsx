


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Component/navbar.jsx';
// import Home from './Component/Home';
// import WhatWeDo from "./Component/WhatWeDo.jsx";
// import Blob from "./Component/Blob.jsx"
// import Price from "./Component//Price.jsx"
// import Audit from "./Component/Audit.jsx"
// import Aboutus from "./Component/AboutUs.jsx"
// import Service from "./Component/Service.jsx"
// import Footer from "./Component/Footer.jsx"
// import Portfolio from "./Component/Portfolio.jsx"
// import Contact from "./Component/Contact.jsx"
// import Blog from "./Component/Blog.jsx"



// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <div className="h-32" />
        
//         {/* Define routes for Home only */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path='/WhatWeDo' element={<WhatWeDo/>} />
//           <Route path='/Blob' element={<Blob/>} />
//           <Route path='/Price' element={<Price/>} />
//           <Route path='/Audit' element={<Audit/>} />
//           <Route path='/Aboutus' element={<Aboutus/>} />
//           <Route path='/Service' element={<Service/>} />
//           <Route path='/Portfolio' element={<Portfolio/>} />
//           <Route path='/Contact' element={<Contact/>} />
//           <Route path='/Blog' element={<Blog/>} />






//         </Routes>
//       </div>
//       <Footer></Footer>
//     </Router>
//   );
// }

// export default App;



import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Component/navbar.jsx';
import Home from './Component/Home';
import WhatWeDo from "./Component/WhatWeDo.jsx";
import Blob from "./Component/Blob.jsx";
import Price from "./Component/Price.jsx";
import Audit from "./Component/Audit.jsx";
import Aboutus from "./Component/AboutUs.jsx";
import Service from "./Component/Service.jsx";
import Footer from "./Component/Footer.jsx";
import Portfolio from "./Component/Portfolio.jsx";
import Contact from "./Component/Contact.jsx";
import Blog from "./Component/Blog.jsx";
import PageLoader from "./Component/PageLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600); // same duration as loader animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading && <PageLoader />}

      {!loading && (
        <>
          <Navbar />
          <div className="h-32" />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/WhatWeDo" element={<WhatWeDo />} />
            <Route path="/Blob" element={<Blob />} />
            <Route path="/Price" element={<Price />} />
            <Route path="/Audit" element={<Audit />} />
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Blog" element={<Blog />} />
          </Routes>

          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
