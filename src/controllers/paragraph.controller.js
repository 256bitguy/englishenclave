const Paragraph = require('../models/paragraph.model');

// Get all chapters
const getParagraphs = async (req, res) => {
  try {
    const chapters = await Paragraph.find();
    // console.log(chapters[0].paragraph.first);
    res.status(200).json(chapters[0].paragraph.first);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching chapters', error });
  }
};
const getSingleParagraph = async (req, res) => {
  try {
    const { genre, id } = req.params;
    const ID = Number(id);
    const chapters = await Paragraph.find();
    const dislplay = chapters[0].paragraph.second;
    for (let i = 0; i < dislplay.length; i++) {
      if (dislplay[i].name === genre) {
        res.status(200).json(dislplay[i].contents[ID]);
      }
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching chapters', error });
  }
};
// Create a new chapter
const createParagraphs = async (req, res) => {
  try {
    const newChapter = new Paragraph(req.body);
    await newChapter.save();
    res.status(201).json(newChapter);
  } catch (error) {
    res.status(400).json({ message: 'Error creating chapter', error });
  }
};

module.exports = {
  getParagraphs,
  createParagraphs,
  getSingleParagraph,
};
