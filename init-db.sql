-- Initialize the database
-- This file is executed when the PostgreSQL container starts for the first time

-- Create extensions if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- The database and user are already created by the POSTGRES_DB, POSTGRES_USER environment variables
-- This file can be used for additional initialization if needed

-- You can add any additional SQL commands here
-- For example, creating additional databases, users, or running seed data
