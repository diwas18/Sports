import News from "../models/newsModel.js";

export const getNews = async (req, res) => {
    const news = await News.find();
    res.status(200).json(news);
};

export const createNews = async (req, res) => {
    const news = new News(req.body);
    await news.save();
    res.status(201).json(news);
};

export const updateNews = async (req, res) => {
    const updated = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
};

export const deleteNews = async (req, res) => {
    await News.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "News deleted successfully" });
};