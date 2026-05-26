import Navbar from './assets/navbar/navbar'
import Hero from './assets/hero/hero'
import Arrivals from './assets/arrivals/arrivals'
import Flash from './assets/flash/flash'
import Categories from './assets/categories/categories'
// import CardCategory from './assets/card/CardCategory'
import Action from './assets/cta/Action'
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Hero />
      <Arrivals />
      <Flash />
      <Categories />
      <Action />
      {/* <CardCategory /> */}
    </>
  )
}

export default App
