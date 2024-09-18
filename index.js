const express = require("express");
const path = require("path");
const app = express()

app.use(require(path.join(__dirname, 'router/router.js')))

app.listen(post, () => {console.log(`Server is running on por ${port} on http://localhost:${port}`)});