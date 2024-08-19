// Import the http module
const http = require('http');

// Define the hostname and port
const hostname = '0.0.0.0';  // Change from '127.0.0.1' to '0.0.0.0'
const port = 8000;

const server = http.createServer((req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow specific methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers

  // Handle OPTIONS preflight request
  if (req.method === 'OPTIONS') {
    res.statusCode = 204; // No Content
    res.end();
    return;
  }

  // Check if the request method is GET
  if (req.method === 'GET') {
    // Set the response header
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    // Create a JSON response
    const responseBody = JSON.stringify({ message: 'hello!' });

    // Send the response body
    res.end(responseBody);
  } else {
    // Handle other HTTP methods (optional)
    res.statusCode = 405; // Method Not Allowed
    res.setHeader('Content-Type', 'text/plain');
    res.end('Method Not Allowed\n');
  }
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
