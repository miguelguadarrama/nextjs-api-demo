
const handler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      const { id } = req.query;
      const data = await fetch(`https://api.gcfund.org/v1/projects/${id}`)
        .then(res => res.json());
      return res.status(200).json(data);
    default:
      res.status(405).json({ message: "Method not allowed" });
  }
}

export default handler;