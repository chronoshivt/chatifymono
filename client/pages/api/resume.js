import { resumePlayback } from "../../lib/spotify";
import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  try {
    const {
      token: { accessToken },
    } = await getSession({ req });

    const response = await resumePlayback(accessToken);

    if (response.ok) {
      return res.status(200).json({ message: "Playback resumed successfully" });
    } else {
      return res.status(response.status).json({ message: "Failed to resume playback" });
    }
  } catch (error) {
    console.error("Error resuming playback:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default handler;