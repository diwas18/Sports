const RateLimitedUI = () => {
    return (
        <div className="flex items-center justify-center min-h-[60vh]">

            <div className="card w-96 bg-base-100 shadow-xl border border-error">

                <div className="card-body items-center text-center">

                    <h2 className="card-title text-error text-2xl">
                        Too Many Requests
                    </h2>

                    <p className="py-4">
                        You are sending requests too quickly.
                        Please wait a few seconds and try again.
                    </p>

                    <button
                        className="btn btn-error"
                        onClick={() => window.location.reload()}
                    >
                        Retry
                    </button>

                </div>

            </div>

        </div>
    );
};

export default RateLimitedUI;