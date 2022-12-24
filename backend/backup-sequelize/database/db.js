import { Sequelize } from "sequelize";

// new sequelize instance
export const connection = new Sequelize("titanium", "root", "", {
  host: "localhost",
  dialect:
    "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

const database = async () => {
  try {
    await connection.authenticate();

    //syn utility help to log the actual sql query and creates tables depending on the attributes passed as option paramiters
    await connection.sync({
      logging: console.log,
      force: true,
    });

    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { database };
