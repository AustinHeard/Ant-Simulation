const express = require('express');

const app = express();

const server = app.listen(3000);
// serve files from the public directory
app.use(express.static('public'));

console.log('Server-side code running');
// app.get('/', (req, res) => {
//   res.sendFile('F:/Dev/Ant-Simulation/index.html');
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })