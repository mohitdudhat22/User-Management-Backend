const { body, validationResult } = require('express-validator');

exports.validateUser = [
  body('firstname')
    .trim()
    .isAlphanumeric()
    .withMessage('First name must contain only letters and numbers')
    .notEmpty()
    .withMessage('First name is required'),
    
  body('lastname')
    .trim()
    .isAlphanumeric()
    .withMessage('Last name must contain only letters and numbers')
    .notEmpty()
    .withMessage('Last name is required'),
    
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail(),
    
  body('contact')
    .matches(/^\+?[\d\s-]+$/)
    .withMessage('Please enter a valid phone number'),
    
  body('postcode')
    .isNumeric()
    .withMessage('Postcode must contain only numbers'),
    
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
    
  body('confirmPassword')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords do not match');
      }
      return true;
    }),
    
  body('hobbies')
    .isArray()
    .withMessage('Hobbies must be an array'),
    
  body('gender')
    .isIn(['male', 'female', 'other'])
    .withMessage('Invalid gender selection'),
    
  body('roles')
    .isArray()
    .withMessage('Roles must be an array')
];

exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}; 