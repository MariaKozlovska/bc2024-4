const { Command } = require('commander');  // Імпортуємо Commander.js
const http = require('http');              // Імпортуємо модуль http
const fs = require('fs').promises;         // Імпортуємо fs для асинхронних операцій
const program = new Command();  // Ініціалізуємо командер
// Налаштовуємо параметри командного рядка
program
  .requiredOption('-h, --host <host>', 'Server host')  // Обов'язковий параметр
  .requiredOption('-p, --port <port>', 'Server port')    // Обов'язковий параметр
  .requiredOption('-c, --cache <path>', 'Cache directory path')  // Обов'язковий параметр
  .parse(process.argv);  // Парсимо аргументи
const options = program.opts();  // Отримуємо значення параметрів
// Виводимо параметри в термінал
console.log(`Host: ${options.host}`);
console.log(`Port: ${options.port}`);
console.log(`Cache directory: ${options.cache}`);
// Перевіряємо, чи існує вказана директорія кешу
fs.access(options.cache)
  .then(() => {
    // Директорія існує, продовжуємо запускати сервер
    // Створюємо веб-сервер
    const server = http.createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Server is working!\n');  // Відповідь від сервера
    });
    // Запускаємо сервер на вказаних хості та порту
    server.listen(options.port, options.host, () => {
      console.log(`The server is running on http://${options.host}:${options.port}`);
    });
  })
  .catch(() => {
    console.error(`Error: Directory "${options.cache}" does not exist.`);
    process.exit(1);  // Завершуємо програму з кодом помилки
  });