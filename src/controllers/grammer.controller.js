const Collection = require('../models/grammer.model');

// Get all chapters
const getChapters = async (req, res) => {
  try {
    const chapters = await Collection.find();
    res.status(200).json(chapters);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching chapters', error });
  }
};
// const getSingle = async (req, res) => {
//     try {
//       const chapters = await grammer.find();
//       res.status(200).json(chapters);
//     } catch (error) {
//       res.status(500).json({ message: 'Error fetching chapters', error });
//     }
//   };
// Create a new chapter
const createChapter = async (req, res) => {
  try {
    const newChapter = new Collection(req.body);
    await newChapter.save();
    res.status(201).json(newChapter);
  } catch (error) {
    res.status(400).json({ message: 'Error creating chapter', error });
  }
};

module.exports = {
  getChapters,
  createChapter,
};
