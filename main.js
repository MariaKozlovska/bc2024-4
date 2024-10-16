// const { Command } = require('commander');  // Імпортуємо Commander.js
// const http = require('http');              // Імпортуємо модуль http
// const fs = require('fs');                  // Імпортуємо fs для перевірки директорії

// const program = new Command();

// // Налаштування параметрів командного рядка
// program
//   .requiredOption('-h, --host <host>', 'server address')
//   .requiredOption('-p, --port <port>', 'server port')
//   .requiredOption('-c, --cache <path>', 'the path to the cache directory')
//   .parse(process.argv);

// // Отримуємо значення аргументів
// const options = program.opts();

// // Перевіряємо, чи існує вказана директорія кешу
// if (!fs.existsSync(options.cache)) {
//   console.error(`Error: Directory "${options.cache}" does not exist.`);
//   process.exit(1);
// }

// // Створюємо веб-сервер
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('The server is working!\n');
// });

// // Запускаємо сервер на вказаних хості та порту
// server.listen(options.port, options.host, () => {
//   console.log(`The server is running on http://${options.host}:${options.port}`);
//   console.log(`Cashe files are located in ${cache}`);
// });

// if (!options.host || !options.port || !options.cache) {
//     console.error('All parameters (host, port, cache) are necessary.');
//     process.exit(1);
// }




// const http = require('http');                 // Імпортуємо http
// const { Command } = require('commander');     // Імпортуємо commander
// const fs = require('fs');                     // Імпортуємо fs для перевірки директорії

// const program = new Command();  // Створюємо об'єкт командера

// // Налаштовуємо параметри командного рядка
// program
//   .requiredOption('-h, --host <host>', 'Server host')  // Обов'язковий параметр хост
//   .requiredOption('-p, --port <port>', 'Server port')  // Обов'язковий параметр порт
//   .requiredOption('-c, --cache <path>', 'Cache directory path');  // Обов'язковий параметр кеш

// program.parse(process.argv);  // Парсимо аргументи
// const { host, port, cache } = program.opts();  // Отримуємо значення параметрів

// // Перевірка існування директорії кешу
// if (!fs.existsSync(cache)) {
//   console.error(`Error: Directory "${cache}" does not exist.`);
//   process.exit(1);  // Завершуємо програму з кодом помилки
// }

// // Вивід параметрів у консоль
// console.log(`Host: ${host}`);
// console.log(`Port: ${port}`);
// console.log(`Cache directory: ${cache}`);

// // Створюємо веб-сервер
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('The server is working!\n');  // Відповідь від сервера
// });

// // Запускаємо сервер на вказаному хості та порту
// server.listen(port, host, () => {
//   console.log(`Server is running at http://${host}:${port}/`);
// });


// if (!options.host || !options.port || !options.cache) {
//         console.error('All parameters (host, port, cache) are necessary.');
//         process.exit(1);
//      };



// const { Command } = require('commander');  // Імпортуємо Commander.js
// const http = require('http');              // Імпортуємо модуль http
// const fs = require('fs');                  // Для перевірки директорії

// const program = new Command();  // Ініціалізуємо командер

// // Налаштовуємо параметри командного рядка
// program
//   .requiredOption('-h, --host <host>', 'адреса сервера')  // Обов'язковий параметр
//   .requiredOption('-p, --port <port>', 'порт сервера')    // Обов'язковий параметр
//   .requiredOption('-c, --cache <path>', 'шлях до кеш-директорії')  // Обов'язковий параметр
//   .parse(process.argv);  // Парсимо аргументи

// const options = program.opts();  // Отримуємо значення параметрів

// // Перевіряємо, чи існує вказана директорія кешу
// if (!fs.existsSync(options.cache)) {
//   console.error(`Помилка: Директорія "${options.cache}" не існує.`);
//   process.exit(1);  // Завершуємо програму з кодом помилки
// }

// // Створюємо веб-сервер
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Сервер працює!\n');  // Відповідь від сервера
// });

// // Запускаємо сервер на вказаних хості та порту
// server.listen(options.port, options.host, () => {
//   console.log(`Сервер запущено на http://${options.host}:${options.port}`);
// });


// const { Command } = require('commander');  // Імпортуємо Commander.js
// const http = require('http');              // Імпортуємо модуль http
// const fs = require('fs');                  // Для перевірки директорії

// const program = new Command();  // Ініціалізуємо командер

// // Налаштовуємо параметри командного рядка
// program
//   .requiredOption('-h, --host <host>', 'Server host')  // Обов'язковий параметр
//   .requiredOption('-p, --port <port>', 'Server port')    // Обов'язковий параметр
//   .requiredOption('-c, --cache <path>', 'Cache directory path')  // Обов'язковий параметр
//   .parse(process.argv);  // Парсимо аргументи

// const options = program.opts();  // Отримуємо значення параметрів

// // Перевіряємо, чи існує вказана директорія кешу
// if (!fs.existsSync(options.cache)) {
//   console.error(`Error: Directory "${options.cache}" does not exist.`);
//   process.exit(1);  // Завершуємо програму з кодом помилки
// }

// // Створюємо веб-сервер
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Server is working!\n');  // Відповідь від сервера
// });

// // Запускаємо сервер на вказаних хості та порту
// server.listen(options.port, options.host, () => {
//   console.log(`The server is running on http://${options.host}:${options.port}`);
// });


// if (!options.host || !options.port || !options.cache) {
//     console.error('All parameters (host, port, cache) are necessary.');
//     process.exit(1);
// }


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
