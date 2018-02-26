export interface ILogger {
  debug(msg: string): ILogger;
  error(msg: string): ILogger;
  info(msg: string): ILogger;
  verbose(msg: string): ILogger;
  warn(msg: string): ILogger;
}