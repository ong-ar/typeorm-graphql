import { GetUserQueryArgs, GetUserResponse } from "../../../types/graph";
import { getRepository, In } from "typeorm";
import User from "../../../entities/User";

const resolvers = {
  Query: {
    GetUser: async (_, args: GetUserQueryArgs): Promise<GetUserResponse> => {
      try {
        const user: User[] = await getRepository(User).find({
          id: In(args.id)
        });
        return {
          ok: true,
          error: null,
          user
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          user: null
        };
      }
    }
  }
};

export default resolvers;
