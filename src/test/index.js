const cluster = require('node:cluster');
const http = require('node:http');
const os = require('node:os');
const process = require('node:process');


if (cluster.isPrimary) {

    // Keep track of http requests
    let numReqs = 0;

    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork()
    }

    function handleMessage(msg) {
        if (msg.cmd && msg.cmd === 'notifyRequest') {
            numReqs += 1;
            console.log(numReqs)
        }
    }

    for (let id in cluster.workers) {
        cluster.workers[id].on('message', handleMessage)
    }

    cluster.on('fork', (worker) => {
        console.log('worker dead:', worker.isDead());
    });

    cluster.on('online', (worker) => {
        console.log(worker.id)
        console.log('Yay, the worker responded after it was forked');
    });

    console.log(cluster.workers['1'].send("Hello"))

} else {
    http.createServer(function (req, res) {
        res.writeHead(200);
        res.end('hello world\n');
        process.send({ cmd: "notifyRequest" })
        process.on('message', (msg) => {
            console.log(msg)
        });
    }).listen(8000)
}