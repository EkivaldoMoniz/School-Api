const express = require("express");
const cors = require ("cors");
const { studentRouter } = require('./modules/students/students.routes');



const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world!!!')
})

app.use(cors());
app.use('/students', studentRouter);
app.listen(3333, () => {
    console.log('Api is running on port 3333')

})