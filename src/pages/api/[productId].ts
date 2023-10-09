import { courses } from "./courses";

export default async function handler(req, res) {
  const { productId } = req.query;
  try {
    const foundProduct = courses.find((course) => course?.id == productId);

    if (!foundProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(foundProduct);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
