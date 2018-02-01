const express = require ('express')
const router = express.Router()
const StudentResponse = require ('./model')
const controller = require ('./controller')


/**
 * @swagger
 * definition:
 *   StudentResponse:
 *     type: "object"
 *     properties:
 *       questionId:
 *         type: "string"
 *       answer:
 *         type: "array"
 */

/**
 * @swagger
 * /excel/student-response:
 *   post:
 *     tags:
 *       - Student Response
 *     description: Saves a student's answer for a particular question
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         description: student response object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/StudentResponse'
 *     responses:
 *       201:
 *         description: Successfully created
 *         schema: 
 *           type: "object"
 *           properties:
 *             _id: 
 *               type: "string"
 *               description: Student Response ID
 */
 

router.post ('/', controller.setStudentResponse)

router.get ('/:id', controller.getStudentResponse)

module.exports = router



/*

router.get ('/:id', controller.getStudentResponseById)

router.delete ('/:id', controller.deleteStudentResponse)
*/

