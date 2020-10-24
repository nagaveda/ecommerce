const express = require('express');
const router = express.Router();

const {isSignedIn, isAuthenticated, isAdmin} = require('../controllers/auth');
const {getUserById} = require('../controllers/user');
const {getProductById, createProduct, getProduct, photo, deleteProduct, updateProduct, getAllProducts, getAllUniqueCategories} = require('../controllers/product');
const { update } = require('../models/user');

//params
router.param("userId", getUserById);
router.param("productId", getProductById);

//Routes

//create routes
router.post("/product/create/:userId",isSignedIn, isAuthenticated, isAdmin, createProduct );

//read routes
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

//delete routes
router.delete("/product/:productId", isSignedIn, isAuthenticated, isAdmin, deleteProduct);

//update route
router.put("/product/:productId", isSignedIn, isAuthenticated, isAdmin, updateProduct);

//listing route
router.get("/products", getAllProducts);

router.get("/products/categories", getAllUniqueCategories);


module.exports =  router;