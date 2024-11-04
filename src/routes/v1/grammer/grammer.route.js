const express = require('express');

const router = express.Router();
const { getChapters, createChapter } = require('../../../controllers/grammer.controller');

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
router.get('/', getChapters);
// /grammer/chapters/explore/rule?topic=Noun&rule=1

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
router.post('/', createChapter);

module.exports = router;
