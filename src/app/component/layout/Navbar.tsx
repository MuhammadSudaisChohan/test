import Image from "next/image"
import Link from "next/link"
import Wrapper from "../shared/Wrapper"

const Navbar = () => {
    return (
    <header className="sticky top-0 z-10 bg-[#ffffffe8]">
        <Wrapper>
             <div className="flex justify-between py-4 items-center">
                 {/* logo */}
                 <div ><Image src={"/logo.png"} width={113} height={691} alt="Logo" />
                 </div>

                 {/* Navigation bar */}

                 <ul className="flex space-x-8">
                    <Link href={"/"}><li className="text-lg mr-5">Home</li></Link> 

                 </ul>
             </div>
             </Wrapper>
    </header>
    )
}

export default Navbar