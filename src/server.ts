import Fastify from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import { campusRoutes } from './routes/campus.routes';

dotenv.config();

const server = Fastify({
  logger: {
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  },
});

server.register(cors, {
  origin: process.env.CORS_ORIGIN || true,
  credentials: true,
});

// Health check
server.get('/health', async () => {
  return { status: 'ok', service: 'campus-service', timestamp: new Date().toISOString() };
});

// Registrar rutas del dominio de campus e infraestructura
server.register(campusRoutes, { prefix: '/api/v1/campus' });

const start = async () => {
  try {
    const port = Number(process.env.PORT) || 4002;
    await server.listen({ port, host: '0.0.0.0' });
    console.log(`[campus-service] Escuchando en http://localhost:${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
