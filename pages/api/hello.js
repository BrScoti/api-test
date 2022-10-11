// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(JSON.stringify(req.body))
  //console.log({ headers: req.headers, refusal_reason: req.body.purchase.payment.refusal_reason });
  res.status(200).json({ headers: req.headers, body: req.body })
}
