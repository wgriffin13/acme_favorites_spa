const server = require('./server')
const {syncAndSeed} = require('./db/index')

const PORT = process.env.PORT || 3000

syncAndSeed()
    .then(() => {
        server.listen(PORT, () => {
           console.log(`Server listening in port ${PORT}`);
        });
    })

