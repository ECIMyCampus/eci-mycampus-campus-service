import { prisma } from '../lib/prisma';

export class CampusService {
  /**
   * Obtiene la lista completa de edificios activos y sus servicios asociados
   */
  async getBuildings() {
    return await prisma.building.findMany({
      where: { isActive: true },
      include: {
        places: { where: { isActive: true } },
        services: true,
      },
      orderBy: { code: 'asc' },
    });
  }

  /**
   * Obtiene el detalle de un edificio por ID o por código
   */
  async getBuildingById(id: string) {
    const building = await prisma.building.findFirst({
      where: {
        OR: [{ id }, { code: id }, { svgElementId: id }],
        isActive: true,
      },
      include: {
        places: true,
        services: true,
      },
    });

    if (!building) {
      throw new Error(`Edificio con identificador '${id}' no encontrado.`);
    }

    return building;
  }

  /**
   * Obtiene la lista de facultades con su paleta de color institucional (RN-012)
   */
  async getFaculties() {
    return await prisma.faculty.findMany({
      where: { isActive: true },
      orderBy: { name: 'asc' },
    });
  }

  /**
   * Obtiene los escenarios deportivos
   */
  async getSportsFacilities() {
    return await prisma.sportsFacility.findMany({
      where: { isActive: true },
      orderBy: { name: 'asc' },
    });
  }
}

export const campusService = new CampusService();
