import { useState, useEffect } from 'react'
import './App.css'
import './cssFiles/main.css'
import { AiAgent } from './cmps/AiAgent'
import { Webly } from './cmps/Webly'
import { Postomatic } from './cmps/Postomatic'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { translations } from './translations'
import Navbar from './cmps/Navbar'
import HomePage from './cmps/HomePage'
import Footer from './cmps/Footer'
import ContactUs from './cmps/ContactUs'
import RenderCarousel from './cmps/RenderCarousel'
import { AiAgentCarousel , PostomaticCarousel, WeblyCarousel } from './cmps/Carousel'



function App() {
  const [lang, setLang] = useState('en');

  const [theme, setTheme] = useState('theme-default');

  const toggleTheme = () => {
    const newTheme = theme === 'theme-default' ? 'theme-alt' : 'theme-default';
    setTheme(newTheme);
    document.body.classList.remove('theme-default', 'theme-alt');
    document.body.classList.add(newTheme);
  };

  const t = translations[lang];

  const toggleLang = () => {
    const newLang = lang === 'he' ? 'en' : 'he';
    setLang(newLang);
    document.body.dir = newLang === 'he' ? 'rtl' : 'ltr';
  };

  const items = [
    // <HomePage lang={lang} t={t} />,
    // <AiAgent lang={lang} t={t} />,
    // <Postomatic lang={lang} t={t} />,
    // <Webly lang={lang} t={t} />,
    // <ContactUs lang={lang} t={t} />
    <PostomaticCarousel key={`postomatic-${lang}`} lang={lang} t={t}/>,
    <WeblyCarousel key={`webly-${lang}`} lang={lang} t={t}/>,
    <AiAgentCarousel key={`aiagent-${lang}`} lang={lang} t={t}/>,
  ];
const carouselKeys = ['postomatic', 'webly', 'aiagent'];

  return (
    <Router>
      <Navbar
        currentLang={lang}
        onToggleLanguage={toggleLang}
        onToggleTheme={toggleTheme}
      />
      <Routes>
        <Route path="/" element={
          <>
          {/* <RenderCarousel keysList={carouselKeys} lang={lang} t={t} /> */}

            <RenderCarousel items={items} />
          </>
        } />
        <Route path="/ai-agent" element={<AiAgent lang={lang} t={t} />} />
        <Route path="/postomatic" element={<Postomatic lang={lang} t={t} />} />
        <Route path="/webly" element={<Webly lang={lang} t={t} />} />
        <Route path="/contact-us" element={<ContactUs lang={lang} t={t} />} />
      </Routes>
      <Footer lang={lang} t={t} />
    </Router>
  );
}

export default App
