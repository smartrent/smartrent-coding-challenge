const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // TODO: implement routes
});

const port = process.env.PORT || 4000;
app.listen(port, () => 
  console.log(`Backend listening at http://localhost:${port}`)
)