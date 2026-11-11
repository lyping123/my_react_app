import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Head, Footer } from './Head.jsx';
import Image from './components/image.jsx';
import Counter from './useState.jsx';
import Form from './form.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Head title="Welcome to my fish market" />

    <Form />
    <div className="image-content">
      <Image />
    </div>
    <Footer />
    {/* <Counter /> */}


  </StrictMode>
)
