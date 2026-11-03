import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Head, Footer } from './Head.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Head title="Welcome to my fish market" />
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQBZrWU81-8Gnm2_EAaVeBpPUtZj3QKUY9QZzouKIhw&s=10" alt="Fish" />
    </div>
    <Footer />

  </StrictMode>
)
