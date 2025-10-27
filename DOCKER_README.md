# Docker Setup for WK Blog

This document explains how to run the WK Blog application using Docker with PostgreSQL.

## Prerequisites

- Docker and Docker Compose installed on your system
- Basic understanding of Docker concepts

## Quick Start

### 1. Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# Database
DATABASE_URL="postgresql://wkblog_user:wkblog_password@localhost:5432/wkblog"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-super-secret-nextauth-secret-change-this-in-production"

# Optional: Add your OAuth providers here
# GOOGLE_CLIENT_ID=""
# GOOGLE_CLIENT_SECRET=""
# GITHUB_ID=""
# GITHUB_SECRET=""
```

### 2. Build and Run with Docker Compose

```bash
# Build and start all services
docker-compose up --build

# Or run in detached mode
docker-compose up -d --build
```

### 3. Access the Application

- **Application**: http://localhost:3000
- **PostgreSQL**: localhost:5432
  - Database: `wkblog`
  - Username: `wkblog_user`
  - Password: `wkblog_password`

## Docker Commands

### Basic Operations

```bash
# Start services
docker-compose up

# Start services in background
docker-compose up -d

# Stop services
docker-compose down

# Stop and remove volumes (WARNING: This will delete your database data)
docker-compose down -v

# View logs
docker-compose logs

# View logs for specific service
docker-compose logs app
docker-compose logs postgres
```

### Database Operations

```bash
# Run Prisma migrations
docker-compose exec app npx prisma migrate deploy

# Generate Prisma client
docker-compose exec app npx prisma generate

# Open Prisma Studio (run this on your host machine, not in container)
npx prisma studio

# Access PostgreSQL directly
docker-compose exec postgres psql -U wkblog_user -d wkblog
```

### Development

```bash
# Rebuild only the app service
docker-compose build app

# Run a command in the app container
docker-compose exec app npm run build

# Access the app container shell
docker-compose exec app sh
```

## File Structure

```
wkblog/
├── Dockerfile              # Application container definition
├── docker-compose.yml      # Multi-container setup
├── .dockerignore           # Files to ignore during Docker build
├── init-db.sql            # PostgreSQL initialization script
└── DOCKER_README.md       # This file
```

## Production Considerations

### Security

1. **Change default passwords**: Update the PostgreSQL password in `docker-compose.yml`
2. **Use environment files**: Create a `.env` file for production secrets
3. **NEXTAUTH_SECRET**: Generate a secure secret for production

### Performance

1. **Resource limits**: Add resource constraints to services
2. **Health checks**: The setup includes health checks for PostgreSQL
3. **Volumes**: Database data is persisted using Docker volumes

### Environment Variables

For production, create a `.env` file:

```env
POSTGRES_DB=wkblog
POSTGRES_USER=wkblog_user
POSTGRES_PASSWORD=your_secure_password_here
DATABASE_URL=postgresql://wkblog_user:your_secure_password_here@postgres:5432/wkblog
NEXTAUTH_URL=https://yourdomain.com
NEXTAUTH_SECRET=your_very_secure_nextauth_secret_here
```

Then update docker-compose.yml to use:

```yaml
env_file:
  - .env
```

## Troubleshooting

### Common Issues

1. **Port conflicts**: If port 3000 or 5432 is already in use, modify the ports in `docker-compose.yml`

2. **Database connection issues**: Ensure the PostgreSQL container is healthy before the app starts

3. **Prisma client issues**: Run `docker-compose exec app npx prisma generate` if you encounter Prisma client errors

4. **Build failures**: Clear Docker cache with `docker system prune` and rebuild

### Debugging

```bash
# Check container status
docker-compose ps

# View container logs
docker-compose logs -f app

# Access container shell for debugging
docker-compose exec app sh
```

## Development vs Production

This setup is optimized for development. For production:

1. Use proper secrets management
2. Set up SSL/TLS termination
3. Configure proper logging
4. Set up monitoring and health checks
5. Use a managed database service instead of containerized PostgreSQL
6. Implement proper backup strategies

## Cleanup

To completely remove all containers, images, and volumes:

```bash
# Stop and remove containers
docker-compose down

# Remove all unused containers, networks, images
docker system prune -a

# Remove volumes (WARNING: This deletes your database)
docker volume rm wkblog_postgres_data
```
