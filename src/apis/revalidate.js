import { revalidateTag } from "next/cache";

export default async function handler(req, res) {
  try {
    await revalidateTag("blogCollection");

    return res.json({ revalidated: true });
  } catch (error) {
    return res.status(500).json({ error: "Revalidation failed", details: error });
  }
}
