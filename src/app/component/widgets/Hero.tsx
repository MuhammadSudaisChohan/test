import Image from 'next/image'
import Wrapper from '../shared/Wrapper'
import Button from '../shared/Button'


const Hero = () => {
  return (
    <section className=''>
      <Wrapper>
        <div className='flex flex-col md:flex-row items-center'>
          {/* left side */}

          <div className='flex-1'>
            <h4 className='text-primary font-semibold text-lg mt-4'>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
            <h1 className='font-bold text-5xl sm:text-6xl'>Certified Web 3.0 and Metaverse Developer</h1>
            <p className='mt-6 text-xl text-slate-600'>A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
            <p className='mt-2 text-xl text-slate-600'> Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>
          <div className='mt-5'>
          <Button  text='Learn More'/>
          </div>
          </div>
          {/* rightside */}

          <div className='flex-1'>
            <Image src={"/assessts/images/heroposter.png"} width={647} height={591} alt='hero image' />
          </div>
        </div>
      </Wrapper>
    </section>

  )
}

export default Hero