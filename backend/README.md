# DataFlow Backend

Backend API for DataFlow - A simple and intuitive record management system.

## Features

- RESTful API architecture
- TypeScript for type safety
- Express.js framework
- Modular structure ready for feature implementation
- CORS and security middleware configured
- Health check endpoint
- Error handling middleware
- Environment-based configuration

## Project Structure

```
src/
├── api/                    # API controllers (to be implemented)
├── routes/                 # Route definitions
│   └── v1/                # API version 1
│       ├── externalRoutes.ts
│       ├── internalRoutes.ts
│       └── index.ts
├── middleware/            # Express middleware
│   ├── errorMiddleware.ts
│   └── index.ts
├── services/              # Business logic (to be implemented)
├── utils/                 # Utility functions
│   └── response/         # Response helpers
└── server.ts             # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Configure environment variables in `.env`

### Development

Run the development server:
```bash
npm run dev
```

The server will start on `http://localhost:3000` (or the port specified in `.env`).

### Build

Build for production:
```bash
npm run build
```

### Production

Start the production server:
```bash
npm start
```

## API Endpoints

### Health Check
- **GET** `/health` - Check API health status

### API Routes
- **Base URL**: `/api/v1`
- **External Routes**: `/api/v1/external/*` (public access)
- **Internal Routes**: `/api/v1/internal/*` (authenticated access)

## Environment Variables

- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 3000)
- `CORS_ORIGINS` - Allowed CORS origins (comma-separated)
- `API_VERSION` - API version (default: v1)

## Response Format

### Success Response
```json
{
  "success": true,
  "data": {},
  "metadata": {
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error message",
    "details": {}
  },
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Development Guidelines

- Follow TypeScript strict mode
- Use path aliases (@/) for imports
- Implement proper error handling
- Write comprehensive TSDoc comments
- Follow RESTful conventions
- Maintain separation of concerns

## License

ISC