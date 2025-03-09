// The logout endpoint can be accessed at:
// POST /api/auth/logout (requires valid JWT token in Authorization header)
// Usage example:

// Logout request
fetch('/api/auth/logout', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your-jwt-token'
  }
});
