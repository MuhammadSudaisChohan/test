import Image from 'next/image'
import Wrapper from '../shared/Wrapper'

const Footer = () => {
  return (
    <section className='mt-16 md:mt-28'>
      <hr/>
      <Wrapper>
        <div className='flex flex-col md:flex-row justify-between mt-10'>
          {/* Left content */}
          <div className='flex-1'>
            <Image src={"/logo.png"} width={113} height={691} alt="Logo" />
            <p className='text-gray-700 max-w-screen-sm mt-5'>
              Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
            </p>
            {/* <div className='flex space-x-4 mt-5'>
              <a href="#"><img src="/facebook-icon.png" alt="Facebook" /></a>
              <a href="#"><img src="/youtube-icon.png" alt="YouTube" /></a>
              <a href="#"><img src="/twitter-icon.png" alt="Twitter" /></a>
              <a href="#"><img src="/github-icon.png" alt="GitHub" /></a>
              <a href="#"><img src="/linkedin-icon.png" alt="LinkedIn" /></a>
            </div> */}
          </div>
          {/* Right content */}
          <div className='flex-1'>
            <div className='flex justify-between mt-12'>
              <div>
                <h1 className='text-2xl font-bold mb-4'>Programs</h1>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>Web 3.0 and Metaverse Developer</li>
                  <li>Artificial Intelligence</li>
                  <li>Cloud-Native Computing</li>
                  <li>Ambient Computing and IoT</li>
                  <li>Genomics and Bioinformatics</li>
                  <li>Network Programmability and Automation</li>
                </ul>
              </div>
              <div>
                <h1 className='text-2xl font-bold mb-4'>Pages</h1>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>Home</li>
                  <li>Quarter 1</li>
                  <li>Quarter 2</li>
                  <li>Quarter 3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Footer
