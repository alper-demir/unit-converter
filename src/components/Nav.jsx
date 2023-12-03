import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className="bg-sky-800 text-white py-4">
            <ul className="flex gap-x-4 justify-center">
                <li>
                    <Link to="/area" className="hover:text-gray-300">
                        Area
                    </Link>
                </li>
                <li>
                    <Link to="/currency" className="hover:text-gray-300">
                        Currency
                    </Link>
                </li>
                <li>
                    <Link to="/length" className="hover:text-gray-300">
                        Length
                    </Link>
                </li>
                <li>
                    <Link to="/temperature" className="hover:text-gray-300">
                        Temperature
                    </Link>
                </li>
                <li>
                    <Link to="/volume" className="hover:text-gray-300">
                        Volume
                    </Link>
                </li>
                <li>
                    <Link to="/weight" className="hover:text-gray-300">
                        Weight
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav