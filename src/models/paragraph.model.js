const mongoose = require('mongoose');

const dataType = new mongoose.Schema({
  topic: String,
  author: String,
});
const IndividualType = new mongoose.Schema({
  name: String,
  contents: [dataType],
});
const FirstType = new mongoose.Schema({
  topics: [String],
  individuals: [IndividualType],
});
const questionSet = new mongoose.Schema({
  ask: String,
  correct: String,
  others: [String],
});
const contentsType = new mongoose.Schema({
  topic: String,
  author: String,
  contents: String,
  question: [questionSet],
});
const SecondType = new mongoose.Schema({
  name: String,
  contents: [contentsType],
});
const paragraphs = new mongoose.Schema({
  first: FirstType,
  second: [SecondType],
});
const paragraphtype = new mongoose.Schema({
  paragraph: paragraphs,
});
const Paragraph = mongoose.model('Paragraph', paragraphtype);

module.exports = Paragraph;
