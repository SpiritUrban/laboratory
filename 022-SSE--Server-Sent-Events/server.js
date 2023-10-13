const express = require('express');
const app = express();

// Массив для хранения активных клиентов (подписчиков)
const clients = [];

// Функция для отправки событий клиентам
function sendEventsToClients() {
  clients.forEach(client =>
    client.res.write(`data: ${new Date().toLocaleTimeString()}\n\n`) // отправляет текущее время
  );
}

// Функция для обработки отключения клиента
function onClientDisconnected(req, res) {
  const index = clients.findIndex(client => client.id === res.id);
  if (index !== -1) {
    clients.splice(index, 1); // удаляет клиента из списка активных
  }
}

// Route для подключения новых клиентов SSE
app.get('/events', (req, res) => {
  // Установка необходимых заголовков для SSE
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  res.id = Date.now();
  const newClient = {
    id: res.id,
    res
  };
  clients.push(newClient); // добавляет нового клиента в список активных

  // Обработчик, вызываемый при закрытии соединения
  req.on('close', () => onClientDisconnected(req, res));
});

// Запускает интервал, который отправляет события всем подключенным клиентам каждую секунду
setInterval(sendEventsToClients, 1000);

// Запускает сервер
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`SSE server running at http://localhost:${PORT}`);
});
