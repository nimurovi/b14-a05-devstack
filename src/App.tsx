
import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Technologies from './components/Technologies'
import Footer from './components/Footer'

function App() {
   const TechData = async () => {
    const response = await fetch('../public/data.json')
    const data = await response.json()
    return data;
  } 
  const [fetchedData] = useState(()=>TechData());

  return (
    <>
       
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Banner />
        <Technologies fetchedData={fetchedData} />
        <Footer/>
      </Suspense>
    </>
  )
}

export default App
