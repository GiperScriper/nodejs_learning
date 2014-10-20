﻿/*
 *	ЗАДАНИЕ 1
 
		1. Подключите модуль 'events'
		2. Создайт объект logger, используя конструктор EventEmitter
		3. Установите для объекта logger событие message
		4. Опишите для события message функцию обратного вызова, которая принимает к качестве аргумента параметр msg и выводит его в консоль
		5. Вызовите метод emit объекта logger и передайте ему в качестве параметров:
			- название события
			- произвольную строку, например 'Hello, world!'
		6. Сохраните файл, запустите его в консоли и убедитесь в корректной работе кода
*/

/*
 *	ЗАДАНИЕ 2
 
		Создайте два пустых массива: users и msgs
		Измените тело функции обратного вызовы события message. Она должна:
			- выводить в консоль строку 'New message: [полученное сообщение]'
			- добавлять полученное сообщение в виде значения очередного элемента массива msgs
		Установите для объекта logger событие login
		Опишите для события login функцию обратного вызова, которая принимает к качестве аргумента параметр name. Она должна:
			- выводить в консоль строку 'New user: [полученное сообщение]'
			- добавлять полученное сообщение в виде значения очередного элемента массива users
		Добавьте несколько вызовов метода emit объекта logger для обоих событий, передавая в качестве второго параметра произвольные значения
		Сохраните файл, запустите его в консоли и убедитесь в корректной работе кода
*/

/*
 *	ЗАДАНИЕ 3

		Установите для объекта logger событие getUsers
		Опишите для события getUsers функцию обратного вызова. Она должна:
			- выводить в консоль строку 'Logged users: [содержимое элементов массива users разделённых произвольным символом]'
		Установите для объекта logger событие getMsgs
		Опишите для события getMsgs функцию обратного вызова. Она должна:
			- выводить в консоль строку 'Messages: [содержимое элементов массива msgs разделённых произвольным символом]'
		Добавьте вызовы метода emit объекта logger для обоих событий в конец кода
		Сохраните файл, запустите его в консоли и убедитесь в корректной работе кода
*/


var EventEmitter = require('events').events.EventEmitter;
var logger = new EventEmitter();

var users = [], msgs = [];


logger.on('message', function(msg){
	msgs.push(msg);
	console.log('New message: ', msg);
});


logger.on('login', function(name){
	users.push(name);
	console.log('New user', name);
});


logger.on('getUsers', function(){
	console.log('Logged users:' , users.join(', '));
});


logger.on('getMsgs', function(){
	console.log('Messages: ', msgs.join(', '));
});

logger.emit('message', 'event one');
logger.emit('login', 'John');
logger.emit('message', 'event two');
logger.emit('login', 'mike');
logger.emit('getUsers');
logger.emit('getMsgs');