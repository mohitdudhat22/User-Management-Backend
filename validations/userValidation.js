const { body } = require('express-validator');

exports.createUserSchema = [
  body('firstname').trim().notEmpty().withMessage('First name is required'),
  body('lastname').trim().notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('contact').matches(/^\+?[\d\s-]+$/).withMessage('Invalid contact number'),
  body('postcode').isNumeric().withMessage('Postcode must be numeric'),
  body('roles').optional().isArray().withMessage('Roles must be an array'),
  body('files')
    .custom((value, { req }) => {
      if (!req.files || req.files.length === 0) {
        return true; // Files are optional
      }
      
      const maxFiles = 5;
      if (req.files.length > maxFiles) {
        throw new Error(`Maximum ${maxFiles} files allowed`);
      }
      
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
      for (const file of req.files) {
        if (!allowedTypes.includes(file.mimetype)) {
          throw new Error('Invalid file type. Only JPEG, PNG, GIF and PDF are allowed.');
        }
      }
      
      return true;
    })
];

exports.updateUserSchema = [
  body('firstname').optional().trim().notEmpty(),
  body('lastname').optional().trim().notEmpty(),
  body('email').optional().isEmail(),
  body('contact').optional().matches(/^\+?[\d\s-]+$/),
  body('postcode').optional().isNumeric(),
  body('roles').optional().isArray()
]; 