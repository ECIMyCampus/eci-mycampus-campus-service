import { FastifyRequest, FastifyReply } from 'fastify';
import { campusService } from '../services/campus.service';
import { buildingParamsSchema } from '../schemas/campus.schema';

export class CampusController {
  async getBuildings(request: FastifyRequest, reply: FastifyReply) {
    try {
      const buildings = await campusService.getBuildings();
      return reply.status(200).send(buildings);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Error al obtener edificios';
      return reply.status(500).send({ error: 'Internal Server Error', message });
    }
  }

  async getBuildingById(request: FastifyRequest, reply: FastifyReply) {
    const parseResult = buildingParamsSchema.safeParse(request.params);
    if (!parseResult.success) {
      return reply.status(400).send({ error: 'Bad Request', message: 'ID de edificio no válido' });
    }

    try {
      const building = await campusService.getBuildingById(parseResult.data.id);
      return reply.status(200).send(building);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Edificio no encontrado';
      return reply.status(404).send({ error: 'Not Found', message });
    }
  }

  async getFaculties(request: FastifyRequest, reply: FastifyReply) {
    try {
      const faculties = await campusService.getFaculties();
      return reply.status(200).send(faculties);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Error al obtener facultades';
      return reply.status(500).send({ error: 'Internal Server Error', message });
    }
  }

  async getSportsFacilities(request: FastifyRequest, reply: FastifyReply) {
    try {
      const facilities = await campusService.getSportsFacilities();
      return reply.status(200).send(facilities);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Error al obtener escenarios deportivos';
      return reply.status(500).send({ error: 'Internal Server Error', message });
    }
  }
}

export const campusController = new CampusController();
