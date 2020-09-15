// создание потока (Web Worker).
var worker = new Worker("task.js");

// Привязка обработчика на событие message, которое будет возникать в случае если поток присылает данные.
worker.addEventListener("message", function (e) {
	document.getElementById("output").innerHTML += "Ответ потока: " + e.data;
}, true);

// Отправка данных потоку.
// Когда воркер получит сообщение в нем произойдет message
worker.postMessage("Hello world!");