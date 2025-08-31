
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    
    res.status(200).json({ message: `User ${username} registered successfully` });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
