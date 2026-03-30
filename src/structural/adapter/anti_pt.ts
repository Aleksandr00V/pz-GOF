class OldLoger {
    log(message: string) : void {
        console.log(`[OLD LOGER]: ${message}`);
    }
}

function logMessage(type: string, message: string): void {
    const logger = new OldLoger();
    logger.log(message);
}

logMessage('email', 'Нове відео вийшло!');
logMessage('sms', 'Нове відео вийшло!');
