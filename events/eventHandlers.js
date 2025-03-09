const eventEmitter = require('../services/eventEmitter');

// User events
eventEmitter.on('userCreated', async (user) => {
  console.log('User created:', user.id);
  // Add your audit logging or other event handling logic here
});

// Role events
eventEmitter.on('roleAssigned', async ({ userId, roleId }) => {
  console.log('Role assigned:', { userId, roleId });
  // Add your audit logging or other event handling logic here
});

module.exports = eventEmitter; 