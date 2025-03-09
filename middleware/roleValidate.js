const { body, param } = require('express-validator');
const { validate } = require('./validate');

exports.validateRole = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Role name is required')
    .isLength({ min: 2, max: 50 })
    .withMessage('Role name must be between 2 and 50 characters'),
  body('description')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Description cannot exceed 500 characters'),
  validate
];

exports.validateUserRole = [
  body('userId')
    .isInt()
    .withMessage('Valid user ID is required'),
  body('roleId')
    .isInt()
    .withMessage('Valid role ID is required'),
  validate
]; 