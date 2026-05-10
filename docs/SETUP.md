# SARAH - Setup Guide

Complete setup instructions for SARAH project.

## Prerequisites

- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher
- **Git**
- API Keys:
  - [OpenAI API Key](https://platform.openai.com/api-keys)
  - [NewsAPI Key](https://newsapi.org/account)
  - (Optional) Google Cloud credentials for voice

## Installation Steps

### 1. Clone Repository

```bash
git clone https://github.com/awwkumar/Sarah.git
cd Sarah
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create `.env` file from template:

```bash
cp .env.example .env
```

Edit `.env` and add your API keys:

```env
# Required
OPENAI_API_KEY=sk_your_openai_key
NEWS_API_KEY=your_newsapi_key

# Optional
GOOGLE_CLOUD_PROJECT_ID=your_project_id
PORT=3000
NODE_ENV=development
```

### 4. Get API Keys

#### OpenAI API Key
1. Go to [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Sign up or log in
3. Create a new API key
4. Copy and paste into `.env`

#### NewsAPI Key
1. Go to [newsapi.org](https://newsapi.org)
2. Sign up for free or premium plan
3. Get your API key
4. Add to `.env`

### 5. Start Development Server

```bash
npm run dev
```

Server will start on `http://localhost:3000`

## Verify Setup

### Health Check

```bash
curl http://localhost:3000/health
```

Expected response:
```json
{
  "status": "ok",
  "timestamp": "2024-...",
  "uptime": 123.45
}
```

### Test Chat API

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello SARAH!"}'
```

## Docker Setup

### Build and Run with Docker

```bash
# Build image
docker build -t sarah-ai .

# Run container
docker run -p 3000:3000 \
  -e OPENAI_API_KEY=your_key \
  -e NEWS_API_KEY=your_key \
  sarah-ai
```

### Using Docker Compose

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f sarah-api

# Stop services
docker-compose down
```

## Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format

# Type check
npm run type-check
```

## Project Structure

```
Sarah/
├── src/
│   ├── backend/          # Express server
│   │   ├── index.ts      # Main entry point
│   │   └── routes/       # API routes
│   ├── services/         # Business logic
│   │   ├── aiService.ts
│   │   └── dataService.ts
│   ├── utils/            # Helper functions
│   ├── types/            # TypeScript interfaces
│   └── config/           # Configuration
├── frontend/             # React frontend (WIP)
├── docs/                 # Documentation
├── tests/                # Test files
├── package.json
├── tsconfig.json
├── Dockerfile
└── docker-compose.yml
```

## API Endpoints

### Chat
- `POST /api/chat` - Send message to SARAH
- `POST /api/chat/analyze` - Analyze message

### Data
- `GET /api/data/news` - Get latest news
- `GET /api/data/market` - Get market data
- `GET /api/data/stock/:symbol` - Get stock data

### Users
- `POST /api/users` - Create user
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Health
- `GET /health` - Server health check

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

### API Key Not Working

1. Verify key is correct in `.env`
2. Check key has necessary permissions
3. Ensure key is not expired
4. Try regenerating key

### Module Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### TypeScript Errors

```bash
# Type checking
npm run type-check

# Clear cache
npm run build -- --clean
```

## Performance Optimization

- Use `.env` for sensitive data, never commit it
- Enable response compression in production
- Use database indexing for queries
- Implement caching strategies
- Monitor API rate limits

## Security Best Practices

- Keep `.env` secure and never commit
- Use HTTPS in production
- Implement rate limiting
- Validate all user inputs
- Use helmet for security headers
- Implement CORS properly

## Next Steps

1. ✅ Install and setup complete
2. 📚 Read [API Documentation](./docs/API.md)
3. 🏗️ Review [Architecture](./docs/ARCHITECTURE.md)
4. 🤝 Check [Contributing Guide](../CONTRIBUTING.md)
5. 🚀 Start building features!

## Support

- 📖 [Documentation](../docs)
- 🐛 [Issues](https://github.com/awwkumar/Sarah/issues)
- 💬 [Discussions](https://github.com/awwkumar/Sarah/discussions)

---

**Happy building! 🚀**
