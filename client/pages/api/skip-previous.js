import { skipPrevious } from "../../lib/spotify";
import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  const {
    token: { accessToken },
  } = await getSession({ req });
  const response = await skipPrevious(accessToken);
  const items = await response;
  return res.status(200).json(items);
};

export default handler;
