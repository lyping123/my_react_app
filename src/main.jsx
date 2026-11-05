import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Head, Footer } from './Head.jsx';
import Image from './components/image.jsx';
import Counter from './useState.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Head title="Welcome to my fish market" />

    <div className="image-content">
      <Image />
    </div>
    <Footer />
    {/* <Counter /> */}


  </StrictMode>
)
