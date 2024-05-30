import CoreTracks from "./component/widgets/CoreTracks"
import Hero from "./component/widgets/Hero"
import ProgramOutcome from "./component/widgets/ProgramOutcome"
import Specialized from "./component/widgets/Specialized"

const page = () => {
  return (
    <main>
      {/* Hero section*/}
    <Hero/>
          {/* Core Tracks section */}
          <CoreTracks/>
           {/* Specialized section */}
           <Specialized/>
            {/* Program outcome */}
            <ProgramOutcome/>
           
    </main>
  )
}

export default page