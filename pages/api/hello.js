// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log({ headers: req.headers, body: req.body });
  res.status(200).json({ headers: req.headers, body: req.body })
}
