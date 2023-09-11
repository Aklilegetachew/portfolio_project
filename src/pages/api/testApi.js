// pages/api/example.js

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Handle GET request logic here
    res.status(200).json({ message: 'This is a GET response from the API.' });
  } else if (req.method === 'POST') {
    // Handle POST request logic here
    console.log(req.body);
    res.status(200).json({ message: 'This is a POST response from the API.' });
  } else {
   
    res.status(405).end(); // Method Not Allowed
  }
}
