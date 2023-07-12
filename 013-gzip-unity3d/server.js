// const express = require('express');
// const compression = require('compression');
// const expressStaticGzip = require('express-static-gzip');

// const app = express();
// const port = 3000;

// app.use(compression());

// // app.use(express.static('public'));

// app.use("/", expressStaticGzip('public', {
//    enableBrotli: true,
//    orderPreference: ['br', 'gz']
// }));

// app.listen(port, () => {
//   console.log(`App listening at http://localhost:${port}`);
// });



const express = require('express');
const app = express();
const port = 3000;

// Middleware для встановлення заголовку 'Content-Encoding: gzip'
app.use((req, res, next) => {
    if (req.originalUrl.includes('.gz')) {
        res.set('Content-Encoding', 'gzip');
    };
    if (req.originalUrl.includes('.js.gz')) {
        res.set('Content-Encoding', 'gzip');
    };
    if (req.originalUrl.endsWith('.wasm.gz')) {
        res.set('Content-Encoding', 'gzip');
        res.set('Content-Type', 'application/wasm');
    };
    next();
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});