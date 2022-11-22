import React from 'react'
import ReactDOM from 'react-dom/client'
import Wine from './Wine/Wine'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Wine
     title=" Le Grand Noir Brut Reserve Rose"
   description="Fransa,cehrayi,0.75l"
    rating="3.6"
    
    />
      <Wine
     title=" Savalan Syrah"
   description="Azerbaijan,red,0.75l"
    rating="4.0"
    
    />
  </>
)
