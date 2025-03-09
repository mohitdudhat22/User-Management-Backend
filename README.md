# User Management Backend System

A robust backend system for managing users, roles, permissions, customers, and suppliers built with Node.js, Express, and Sequelize ORM.

## Features

- 🔐 Authentication & Authorization
- 👥 User Management
- 🎭 Role-based Access Control
- 📝 Permission Management
- 🏢 Customer & Supplier Management
- 📤 Export Functionality
- 📁 File Upload Support
- 🔒 Session Management
- 🗑️ Automatic Cleanup Jobs

## Prerequisites

- Node.js (v14 or higher)
- MySQL Database
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd user-management-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
PORT=5000
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=database_development
```

4. Set up the database:
```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

## Project Structure

```
├── config/
│   └── config.json         # Database configuration
├── controllers/           # Request handlers
├── middleware/           # Custom middleware functions
├── models/              # Sequelize models
├── routes/             # API routes
├── migrations/        # Database migrations
├── seeders/          # Database seeders
├── uploads/         # File upload directory
├── exports/        # Export files directory
└── server.js       # Application entry point
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Roles
- `GET /api/roles` - Get all roles
- `GET /api/roles/:id` - Get role by ID
- `POST /api/roles` - Create new role
- `PUT /api/roles/:id` - Update role
- `DELETE /api/roles/:id` - Delete role

### Permissions
- `GET /api/permissions` - Get all permissions
- `POST /api/permissions` - Create new permission
- `PUT /api/permissions/:id` - Update permission

### Customers & Suppliers
- `GET /api/customers` - Get all customers
- `POST /api/customers` - Create new customer
- `PUT /api/customers/:id` - Update customer
- `DELETE /api/customers/:id` - Delete customer
- Similar endpoints for suppliers under `/api/suppliers`

## Security Features

- Password hashing using bcrypt
- JWT-based authentication
- Token blacklisting
- Session management
- Role-based access control
- File upload validation
- Input validation and sanitization

## Automated Jobs

The system includes automated cleanup jobs:
- Token blacklist cleanup
- Session cleanup (runs every 24 hours)

## File Upload Support

Supports multiple file uploads with:
- File type validation (JPEG, PNG, GIF, PDF)
- File size limits
- Automatic directory creation

## Development

Start the development server:
```bash
npm run dev
```

For production:
```bash
npm start
```

## Testing

```bash
npm test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details; 