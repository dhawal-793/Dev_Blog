import Link from "next/link";
import { LinkedIn, GitHub, Home } from "./Icons";
type Props = {}


const navlinks = [
    {
        id:"1",
        Name: 'Home',
        Href: '/',
        Icon: <Home />,
        target:"_self"
    },
    {
        id:"2",
        Name: 'GitHub',
        Href: 'https://github.com/dhawal-793',
        Icon: <GitHub />,
          target:"_blank"
    },
    {
        id:"3",
        Name: 'LinkedIn',
        Href: 'https://www.linkedin.com/in/dhawal793',
        Icon: <LinkedIn />,
          target:"_blank"
    }
];




const Navbar = (props: Props) => {
    return (
        <>
            <nav className="fixed top-0 left-0 flex justify-center items-center px-5 w-full h-20 backdrop-blur-sm" >
                <ul className="w-full flex justify-between items-center">
                    <Link href='/' className="text-3xl font-bold">
                        DevBlog
                    </Link>
                    <div className="flex">
                        {navlinks.map(({id, Name, Href, Icon,target }) => {
                            return (
                                <Link href={Href} target={target} key={id}>
                                    <li
                                        className={`mx-4 py-2 capitalize font-medium  cursor-pointer text-gray-500 hover:scale-[1.15] border-b-2 border-transparent hover:border-b-gray-300 duration-500 hover:text-gray-600`}>
                                        <span className="hidden sm:inline-block"> {Name}</span>
                                        <span className="sm:hidden">{Icon}</span>

                                    </li>
                                </Link>
                            )

                        })}
                    </div>
                </ul>
            </nav>
            <div className="h-20"></div>
        </>
    )
}

export default Navbar;