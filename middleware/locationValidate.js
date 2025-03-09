const { body, param } = require('express-validator');
const { validate } = require('./validate');

exports.validateState = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('State name is required')
    .isLength({ min: 2 })
    .withMessage('State name must be at least 2 characters long'),
  validate
];

exports.validateCity = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('City name is required')
    .isLength({ min: 2 })
    .withMessage('City name must be at least 2 characters long'),
  body('stateId')
    .isInt()
    .withMessage('Valid state ID is required'),
  validate
];

exports.validateStateParam = [
  param('stateId')
    .isInt()
    .withMessage('Valid state ID is required'),
  validate
]; 