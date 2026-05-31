import { useEffect } from "react";
import NavBar from "../components/NavBar";
import RateLimitedUI from "../components/RateLimitedUI";
import { useNewsStore } from "../store/useNewsStore";

const HomePage = () => {

    const { news, fetchNews, loading } = useNewsStore();

    // Change to true to test rate limit page
    const rateLimited = false;

    // Fetch data when page loads
    useEffect(() => {
        fetchNews();
    }, []);

    // Show Rate Limited UI
    if (rateLimited) {
        return <RateLimitedUI />;
    }

    return (
        <div className="min-h-screen bg-base-200">

            {/* Navbar */}
            <NavBar />

            <div className="p-6">

                <h1 className="text-4xl font-bold text-center mb-4">
                    Latest Sports News
                </h1>

                <p className="text-center text-lg mb-10">
                    Stay updated with trending sports headlines.
                </p>

                {/* Loading state */}
                {loading && (
                    <div className="text-center">
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                )}

                {/* News list */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {news.map((item) => (
                        <div key={item._id} className="card bg-base-100 shadow-xl">

                            <figure>
                                <img
                                    src={
                                        item.image ||
                                        "https://images.unsplash.com/photo-1547347298-4074fc3086f0"
                                    }
                                    alt="news"
                                />
                            </figure>

                            <div className="card-body">

                                <h2 className="card-title">
                                    {item.title}
                                </h2>

                                {/* FIXED: content instead of description */}
                                <p>
                                    {item.content}
                                </p>

                                {/* Extra info from your schema */}
                                <div className="text-sm opacity-70 mt-2">
                                    By {item.author || "Admin"} • {item.category}
                                </div>

                                <div className="card-actions justify-end">

                                    <button className="btn btn-primary">
                                        Read More
                                    </button>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
};

export default HomePage;