import app from './app.js';
import cluster from 'cluster';
import numCPUs from 'os';

if (cluster.isMaster) {

    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs.cpus().length; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        cluster.fork(); // Create a New Worker, If Worker is Dead
    });

} else {
    app.listen(3000, () => console.log("server starting on port 3000!"));
}
