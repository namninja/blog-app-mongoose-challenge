'use strict';

// exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/blogs-api';
// exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-blogs-api';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb+srv://zero-admin:zero-admin@cluster0-pfvwv.mongodb.net/blogs-api?retryWrites=true';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb+srv://zero-admin:zero-admin@cluster0-pfvwv.mongodb.net/test-blogs-api?retryWrites=true';
exports.PORT = process.env.PORT || 8080;