import Footer from "./sections/Footer"
import AlwaysIconic from "./sections/AlwaysIconic"
import Featured from "./sections/Featured"
import GearUp from "./sections/GearUp"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Icons from "./sections/Icons"
import Links from "./sections/Links"
import MemberBenefits from "./sections/MemberBenefits"
import MovingContent from "./sections/MovingContent"
import Navbar from "./sections/Navbar"
import SBS from "./sections/SBS"
import Trending from "./sections/Trending"

const App = () => {
  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <Navbar />
      </section>
      <section>
        <MovingContent />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Icons />
      </section>
      <section>
        <Trending />
      </section>
      <section>
        <Featured />
      </section>
      <section>
        <GearUp />
      </section>
      <section>
        <AlwaysIconic />
      </section>
      <section>
        <SBS />
      </section>
      <section>
        <MemberBenefits />
      </section>
      <section>
        <Links />
      </section>
      <section>
        <Footer />
      </section>
    </>
  )
}

export default App
