const express = require('express');

const router = express.Router();
const { createParagraphs, getSingleParagraph, getParagraphs } = require('../../../controllers/paragraph.controller');

/**
 * @swagger
 * /chapters:
 *   get:
 *     summary: Get all chapters
 *     tags: [Chapters]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Collection'
 */
router.get('/', getParagraphs);
// http://localhost:5173/paragraphs/genere/all/History/0
// /paragraph/chapters/explore/rule?topic=Noun&rule=1

router.get('/all/:genre/:id', getSingleParagraph);
/**
 * @swagger
 * /chapters:
 *   post:
 *     summary: Create a new chapter
 *     tags: [Chapters]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Collection'
 *     responses:
 *       "201":
 *         description: Created
 *       "400":
 *         description: Bad Request
 */
router.post('/', createParagraphs);

module.exports = router;
