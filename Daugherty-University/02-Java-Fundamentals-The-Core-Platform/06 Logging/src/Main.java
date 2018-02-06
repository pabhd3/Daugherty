import java.io.IOException;
import java.util.logging.ConsoleHandler;
import java.util.logging.FileHandler;
import java.util.logging.Formatter;
import java.util.logging.Handler;
import java.util.logging.Level;
import java.util.logging.LogManager;
import java.util.logging.Logger;
import java.util.logging.SimpleFormatter;

public class Main {

	static Logger generalLogger = LogManager.getLogManager().getLogger(Logger.GLOBAL_LOGGER_NAME);	
	static Logger fileLogger = Logger.getLogger("filelogger");
	
	public static void main(String[] args) {
		generalLogging();
		fileLogging();
	}
	
	//-------------------
	// 1. General Logging
	//-------------------
	private static void generalLogging() {
		// TODO: use the generalLogger to log an INFO, WARNING and SEVERE log message
		Logger log = Logger.getLogger("testLogger");
		log.info("The INFO Message Logged");
		log.warning("The WARNNG Message Logged");
		log.severe("The SEVERE Message Logged");
	}
	
	//-------------------
	// 2. Logging to a file
	//-------------------
	private static void fileLogging() {
		// TODO: Use the fileLogger to log all log messages to a file in your home directory
		Logger log = Logger.getLogger("test2Logger");
		try {
			FileHandler fileHandler = new FileHandler("hereIAm.log");
			log.addHandler(fileHandler);
			log.info("The INFO File Message Logged");
			log.warning("The WARNNG File Message Logged");
			log.severe("The SEVERE File Message Logged");
			fileHandler.close();
		} catch (IOException err) {
			System.out.println(err);
		}
	}
}