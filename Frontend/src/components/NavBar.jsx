import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-md px-6">
            
            {/* Left Side */}
            <div className="flex-1">
                <Link 
                    to="/" 
                    className="text-2xl font-bold text-primary"
                >
                    SportsNews
                </Link>
            </div>

            {/* Right Side */}
            <div className="flex gap-3">

                <Link 
                    to="/" 
                    className="btn btn-ghost"
                >
                    Home
                </Link>

                <Link 
                    to="/create" 
                    className="btn btn-primary"
                >
                    Add News
                </Link>

            </div>

        </div>
    );
};

export default NavBar;