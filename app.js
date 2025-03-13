const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors(
    {
        origin: 'http://localhost:5174',
    }
));

app.use(express.json()); 
app.use(express.static('public'));
const blogRouter = require('./Routers/blog'); 
app.use("/blog", blogRouter);

app.use(require("./middleware/errorHardware"));
app.use(require("./middleware/notFound"));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});