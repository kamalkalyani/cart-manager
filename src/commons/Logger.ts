var bunyan = require('bunyan');


class Logger {
    private static _logger = bunyan.createLogger({ name: 'myapp' });

    static info = (message: string, object: any = {}) => {
        Logger._logger.info(object, message)
    }

    static error = (message: string, object: any = {}) => {
        Logger._logger.error(object, message)
    }

}

export default Logger
