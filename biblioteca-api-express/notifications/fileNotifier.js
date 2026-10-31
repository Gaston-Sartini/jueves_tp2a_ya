import { appendFile } from "node:fs/promises";
/*
como los dos cumplen el mismo contrato (notify({ subject, body })), el listener solo llama a notifier.notify(...) y no le importa si por dentro escribe en la consola o en un archivo. Es lo mismo que tu controller con los DAO.
*/
const fileNotifier = {
    async notify({ subject, body }) {
    const line = `${new Date().toISOString()} [NOTIFICACIÓN] ${subject} - ${body}\n`;
    await appendFile("notifications.log", line);
    },
};

export default fileNotifier;