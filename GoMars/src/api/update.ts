import { FormdataHeader } from "./get";
import { server } from "./server";

// PUT /api/profile
export const updateProfile = async (
  headers: FormdataHeader,
  params: ProfileUpdateParams
): Promise<ProfileUpdateResponse> => {
  const response = await server.put("/api/profile", params, { headers });
  return response.data;
};
