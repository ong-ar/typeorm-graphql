import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions = {
  type: "postgres",
  database: "nuber",
  synchronize: true,
  logging: true,
  entities: ["entities/**/*.*"],
  host: "localhost",
  port: 5432,
  username: "nuber",
  password: "1234qwer"
};

export default connectionOptions;
