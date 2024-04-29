const express = require('express');
const cors = require('cors');
const path = require('path'); // Import path module
const app = express();
const port = 43922;
// Allow all cross-origin requests
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());
app.get('/', (req, res) => {
    console.log(__dirname)

    try {

        res.sendFile(path.join(__dirname, 'index.html'));
    } catch(e) {
        res.status(500).send({'error': 'Internal server error'})
    }
    

});
/*
------------------
Aca van los endpoints.
------------------
*/

// Nuestra aplicación esta lista para recibir peticiones
app.listen(port, () => {

    console.log('hola ${port}');

                        }
);