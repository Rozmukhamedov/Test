// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { courses } from "./courses";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(courses);
  }
}
