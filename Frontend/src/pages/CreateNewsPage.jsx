import { useState } from "react";
import NavBar from "../components/NavBar";
import { useNewsStore } from "../store/useNewsStore";
import { useNavigate } from "react-router-dom";

const CreateNewsPage = () => {

    const { createNews } = useNewsStore();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        content: "",
        image: "",
        author: "",
        category: "general"
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await createNews(formData);

        navigate("/");
    };

    return (
        <div className="min-h-screen bg-base-200">

            <NavBar />

            <div className="flex justify-center p-6">

                <form
                    onSubmit={handleSubmit}
                    className="card w-full max-w-lg bg-base-100 shadow-xl p-6"
                >

                    <h2 className="text-2xl font-bold text-center mb-4">
                        Create News
                    </h2>

                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        className="input input-bordered mb-3 w-full"
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="content"
                        placeholder="Content"
                        className="textarea textarea-bordered mb-3 w-full"
                        onChange={handleChange}
                        required
                    ></textarea>

                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        className="input input-bordered mb-3 w-full"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="author"
                        placeholder="Author"
                        className="input input-bordered mb-3 w-full"
                        onChange={handleChange}
                    />

                    <select
                        name="category"
                        className="select select-bordered mb-4 w-full"
                        onChange={handleChange}
                    >
                        <option value="general">General</option>
                        <option value="match">Match</option>
                        <option value="event">Event</option>
                        <option value="announcement">Announcement</option>
                    </select>

                    <button className="btn btn-primary w-full">
                        Publish News
                    </button>

                </form>

            </div>

        </div>
    );
};

export default CreateNewsPage;