import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./data/library.sqlite",
  logging: false,
});

try {
  await sequelize.authenticate();
  console.log("Conectado a la base de datos");
} catch (error) {
  console.error("No se pudo conectar a la base de datos:", error);
}

export default sequelize;