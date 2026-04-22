/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import Expertise from './components/Expertise';
import Services from './components/Services';
import Team from './components/Team';
import Methodology from './components/Methodology';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import Contact from './components/Contact';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <main className="selection:bg-earth-accent selection:text-white dark:selection:bg-earth-accent-light dark:selection:text-earth-stone">
      <Navbar />
      <Hero />
      <Clients />
      <About />
      <Expertise />
      <Services />
      <Team />
      <Methodology />
      <CaseStudies />
      <Process />
      <Contact />
    </main>
  );
}


