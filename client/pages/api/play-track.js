import { playChosenTrack } from "../../lib/spotify";
import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  const {
    token: { accessToken },
  } = await getSession({ req });
  const artist = req.body;
  const response = await playChosenTrack(accessToken, artist);
  const items = await response;
  return res.status(200).json(items);
};

export default handler;
