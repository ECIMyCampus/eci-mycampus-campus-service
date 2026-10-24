import Fastify from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';

dotenv.config();

const server = Fastify({
  logger: true,
});

server.register(cors, {
  origin: true,
});

// Health check
server.get('/health', async () => {
  return { status: 'ok', service: 'campus-service', timestamp: new Date().toISOString() };
});

// Rutas de edificios y campus
server.get('/api/v1/campus/buildings', async (request, reply) => {
  return reply.status(501).send({ message: 'Ruta en implementación - Etapa 4' });
});

server.get('/api/v1/campus/buildings/:id', async (request, reply) => {
  return reply.status(501).send({ message: 'Ruta en implementación - Etapa 4' });
});

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
