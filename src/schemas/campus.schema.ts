import { z } from 'zod';

export const buildingParamsSchema = z.object({
  id: z.string().min(1, 'El ID del edificio es obligatorio'),
});

export const createBuildingSchema = z.object({
  code: z.string().min(2, 'Código de edificio requerido (ej. BLQ-A)'),
  name: z.string().min(3, 'Nombre del edificio requerido'),
  description: z.string().optional(),
  svgElementId: z.string().min(3, 'ID de elemento SVG requerido (ej. ECI-BLQ-A)'),
  imageUrl: z.string().url('URL de imagen no válida').optional(),
  floorsCount: z.number().int().min(1).default(1),
  academicInfo: z.string().optional(),
});

export const createFacultySchema = z.object({
  name: z.string().min(3, 'Nombre de facultad requerido'),
  slug: z.string().min(2, 'Slug requerido'),
  hexColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/, 'Color HEX válido requerido (ej. #8B0000)'),
});
