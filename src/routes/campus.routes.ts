import { FastifyInstance } from 'fastify';
import { campusController } from '../controllers/campus.controller';

export async function campusRoutes(fastify: FastifyInstance) {
  fastify.get('/buildings', campusController.getBuildings.bind(campusController));
  fastify.get('/buildings/:id', campusController.getBuildingById.bind(campusController));
  fastify.get('/faculties', campusController.getFaculties.bind(campusController));
  fastify.get('/sports', campusController.getSportsFacilities.bind(campusController));
}
