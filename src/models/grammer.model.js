const mongoose = require('mongoose');

// Define the schema for chapters
const ChapterSchema = new mongoose.Schema({
  name: String,
  rulesHeading: { type: [String], required: true },
});

// Define the schema for topics
const TopicSchema = new mongoose.Schema({
  topic: { type: ChapterSchema, required: true },
});

// Define the main schema for grammar
const GrammarSchema = new mongoose.Schema({
  chapters: { type: [TopicSchema], required: true },
});

// Create the model
const Grammar = mongoose.model('Grammer', GrammarSchema);

module.exports = Grammar;

/**
    grammer:
    {
        chapters : [
            Noun:
            {
            rulesHeading: ["one","two","three","four"]
            },
            Pronoun:
            {
            rulesHeading: ["one","two","three","four"]
            }
        ]
    }

*/
