import { pausePlayback } from "../../lib/spotify";
import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  try {
    const {
      token: { accessToken },
    } = await getSession({ req });

    const response = await pausePlayback(accessToken);

    if (response.ok) {
      return res.status(200).json({ message: "Playback paused successfully" });
    } else {
      return res.status(response.status).json({ message: "Failed to pause playback" });
    }
  } catch (error) {
    console.error("Error pausing playback:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default handler;