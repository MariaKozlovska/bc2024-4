const http = require('http'); // Import the http module
const fs = require('fs').promises; // Import promises version of fs for asynchronous file operations
const path = require('path'); // Import path module for handling file paths
const { Command } = require('commander'); // Import commander for command line options

const program = new Command(); // Initialize commander

// Set up command line options
program
  .requiredOption('-h, --host <host>', 'Server host') // Required host option
  .requiredOption('-p, --port <port>', 'Server port') // Required port option
  .requiredOption('-c, --cache <path>', 'Cache directory path'); // Required cache directory option

program.parse(process.argv); // Parse command line arguments

// Get the command line options
const { host, port, cache } = program.opts();

// Log the server configuration
console.log(`Host: ${host}`);
console.log(`Port: ${port}`);
console.log(`Cache directory: ${cache}`);

// Create HTTP server
const server = http.createServer(async (req, res) => {
  const urlParts = req.url.split('/'); // Split the URL into parts
  const httpCode = urlParts[1]; // Get the HTTP code from the URL
  const filePath = path.join(cache, `${httpCode}.jpg`); // Set the file path for the image

  if (req.method === 'GET') { // Handle GET requests
    try {
      const image = await fs.readFile(filePath); // Read the image from cache
      res.writeHead(200, { 'Content-Type': 'image/jpeg' }); // Set response header
      res.end(image); // Send image data in response
    } catch (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' }); // Handle file not found
        res.end('Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' }); // Handle other errors
        res.end('Internal Server Error');
      }
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' }); // Handle unsupported methods
    res.end('Method Not Allowed');
  }
});

// Start the server
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`); // Log server URL
});
