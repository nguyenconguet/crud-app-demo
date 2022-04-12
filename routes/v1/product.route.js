const router = require("express").Router();
const {
  createNewProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById
} = require("../../controllers/product.controller");

/**
 * @swagger
 * tags:
 *  name: Products
 *  description: Product management and retrieval
 */

// create
/**
 * @swagger
 * /products:
 *  post:
 *    summary: Create a product
 *    tags: [Products]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Product'
 *    responses:
 *      201:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                product:
 *                  $ref: '#/components/responses/Product'
 */
router.post("/", createNewProduct);

// read
/**
 * @swagger
 * /products:
 *  get:
 *    summary: get all products
 *    tags: [Products]
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                products:
 *                  type: array
 *                  items:
 *                    $ref: '#/components/responses/Product'
 */
router.get("/", getAllProducts);

/**
 * @swagger
 * /products/{id}:
 *  get:
 *    summary: get product by id
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *    responses:
 *      200:
 *        description: get a list of all products
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                products:
 *                  $ref: '#/components/responses/Product'
 *      404:
 *        description: product does not exist
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *            example:
 *              success: false
 *              message: product does not exist
 */
router.get("/:id", getProductById);

// update
/**
 * @swagger
 * /products/{id}:
 *  patch:
 *    summary: update a product
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *          required: true
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#components/schemas/Product'
 *    responses:
 *      200:
 *        description: update product successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                product:
 *                  $ref: '#/components/responses/Product'
 *      400:
 *        description: name field is required
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *            example:
 *              success: false
 *              message: name field is required
 *      404:
 *        description: product does not exist
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *            example:
 *              success: false
 *              message: product does not exist
 */
router.patch("/:id", updateProductById);

// delete
/**
 * @swagger
 * /products/{id}:
 *  delete:
 *    summary: delete product by id
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                product:
 *                  $ref: '#/components/responses/Product'
 *      404:
 *        description: product does not exist
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Error'
 *            example:
 *              success: false
 *              message: product does not exist
 */
router.delete("/:id", deleteProductById);

module.exports = router;
