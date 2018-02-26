import { Logger, transports } from "winston";
import * as http from "http";
import * as https from "https";
import * as fs from "fs";
import * as dotenv from "dotenv";
import { App } from "./app";
import { log } from "./log";
import * as NodeCache from "node-cache";
import { dataStore } from "./data/dataStore";

// This loads the .env configuration.
dotenv.config();

// Configure the log to use the Winston logger.
log.initializeLogger(new Logger({
  transports: [
    new transports.Console({
      json: false,
      formatter: (options: {}): string => {
        return log.formatter(options);
      }
    })
  ]
}));

dataStore.initialize(new NodeCache({stdTTL: 0, checkperiod: 0}));

const app: App = new App();
const defaultPort: string = "8888";
const SSL_PRIVATE_KEY: string = process.env.SSL_PRIVATE_KEY === undefined 
	? "/etc/ssl/local/private.key" 
	: process.env.SSL_PRIVATE_KEY as string;
const SSL_CERT: string = process.env.SSL_CERT === undefined
	? "/etc/ssl/local/chain.txt"
	: process.env.SSL_CERT as string;
const serverOptions: object = (process.env.NODE_ENV === "development") ? {} : {
	key: fs.readFileSync(SSL_PRIVATE_KEY),
	cert: fs.readFileSync(SSL_CERT)
};
const port: number | string | boolean = normalizePort(process.env.PORT);

/**
 * Create HTTP server.
 */
export const server: http.Server | https.Server = process.env.NODE_ENV === "development" ? 
	http.createServer(app.express) : https.createServer(serverOptions, app.express);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val: string = defaultPort): number | string | boolean {
	const normalizedVal: number = parseInt(val);

	if (isNaN(normalizedVal)) {
		// named pipe
		return val;
	}

	if (normalizedVal >= 0) {
		// port number
		return normalizedVal;
	}

	return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error: NodeJS.ErrnoException): void {
	if (error.syscall !== "listen") {
		throw error;
	}

	const bind: string = typeof port === "string"
		? `Pipe ${port}`
		: `Port ${port}`;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case "EACCES":
			log.error(`${bind} requires elevated privileges`);
			process.exit(1);
			break;
		case "EADDRINUSE":
			log.error(`${bind} is already in use`);
			process.exit(1);
			break;
		default:
			throw error;
	}
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening(): void {
	const bind: string = `port ${server.address().port}`;
	const env: string | undefined = process.env.NODE_ENV;
	log.info(`Listening on ${bind} in ${env}`);
}
