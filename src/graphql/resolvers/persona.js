import { UserInputError } from "apollo-server-express";
import { Op } from "sequelize";
export default {
  Query: {
    persona: async (root, args, { db }, info) => {
      const person = await db.persona.findByPk(args.id);
      return person;
    },
    personas: async (root, args, { db }, info) => {
      const personas = await db.persona.findAll();
      if (!personas) {
        throw new UserInputError("No se encontraron personas");
      }
      return { results: personas };
    },
    searchPersona: async (root, args, { db }) => {
      const { search } = args;
      const personas = await db.persona.findAll({
        where: {
          [Op.or]: {
            nombre: { [Op.like]: `%${search}%` },
            apellidoPaterno: { [Op.like]: `%${search}%` },
            apellidoMaterno: { [Op.like]: `%${search}%` },
          },
        },
      });
      if (!personas) {
        throw new UserInputError("No se encontraron personas");
      }
      return { results: personas };
    },
  },
  Mutation: {
    createPersona: async (root, { input }, { db }) => {
      const { nombre, apellidoPaterno, apellidoMaterno } = input;
      const personaExist = await db.persona.findOne({
        where: {
          [Op.or]: [{ nombre }, { apellidoPaterno }, { apellidoMaterno }],
        },
      });
      if (personaExist) {
        throw new UserInputError("La persona ya existe");
      }
      const persona = await db.persona.create({
        ...input,
      });

      const personas = await db.persona.findAll();
      if (!personas) {
        throw new UserInputError("No se encontraron personas");
      }
      return { results: personas };
    },
    updatePersona: async (root, { input }, { db }) => {
      const { id } = input;
      const personaExist = await db.persona.findOne({
        where: {
          id: id,
        },
      });
      if (!personaExist) {
        throw new UserInputError("La persona ya no existe");
      }

      await personaExist.update({
        ...input,
      });

      const personas = await db.persona.findAll();
      if (!personas) {
        throw new UserInputError("No se encontraron personas");
      }
      return { results: personas };
    },
    deletePersona: async (root, { input }, { db }) => {
      const { id } = input;
      const personaExist = await db.persona.findByPk(id);
      if (personaExist) {
        await db.persona.destroy({
          where: {
            id,
          },
        });
        const personas = await db.persona.findAll();
        if (!personas) {
          throw new UserInputError("No se encontraron personas");
        }
        return { results: personas };
      } else {
        throw new UserInputError("La persona ya no existe");
      }
    },
  },
};
