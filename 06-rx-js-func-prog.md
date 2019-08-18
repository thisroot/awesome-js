## Функциональное программирование
Это парадигма программирования, в которой процесс вычисления трактуется как вычисление значений функций в математическом понимании последних.

## Чистая функция
- Возвращаемое значение зависит только от входных данных
- Не вызвают побочных эффектов
- С одним и тем же входным значением результат всегда будет одинаков
- Основываются только на внутреннем состоянии и не изменяют внешние данные
- Могут вызывать только чистые функции
- Можно мемоизировать

## Функция первого класса
функция которую можно обьявить в виде переменной

## Функция высшего порядка
функция принимает в качестве аргументов функцию или возвращает другую функцию

## Побочные эффекты
Когда функция или выражение изменяет состояние все своего контекста, результат является побочным эффектом.
- Вызов API, манипулирование DOM, вывод console.log, запись в БД

## Состояние
Информация, к которой программа имеет доступ и с которой может работать в определенный момент времени.
- Данные в памяти, порты ввода / вывода, базы данных

## Императивное программирование
Описывает логику выполнения программы в явных командах с операторами, изменяющими состояние программы

## Декларативное программирование
Описывает что выполняет логика программы без описания того, как это сделать

## Реактивное программирование
Являеется декларативным наблюдением и реагированием на поступающие события во времени

## Observables
Это поток или последовательность событий во времени
- Горячие - которые существуют независимо от того подписаны мы на них или нет
- Холодные - существуют только тогда, когда мы подписываемся на них `subscribe`

## Subject
может отправлять данные одновременно множеству "потребителей", которые могут регистрироваться уже в процессе исполнения Subject, в то время как исполнение стандартного Observable осуществляется уникально для каждого его вызова.
- BehaviorSubject хранит в себе последнее отправленное им значение. Так, каждому новому обработчику в момент регистрации (вызов subscribe()) будет отправлено это значение.
- ReplaySubject способны хранить заданное количество последних значений, которое задается при создании объекта
- AsyncSubject "потребителям" передается только последнее значение объекта и только, когда он завершит свое выполнение (вызов complete())

## Multicasted Observable
- позволяет в рамках одного и того выполнения регистрировать сразу несколько обработчиков
- multicast() принимает Subject, который регистрирует на себя всех "потребителей" и который сам регистрируется в качестве обработчика для исходного объекта Observable.
- В результате получается объект типа ConnectableObservable - стандартный Observable с методом connect(). Именно вызов connect() инициирует выполнение исходного объекта и возвращает его контекст (объект с unsubscribe())

## Однонаправленный поток
Данные текут в одном напрвлении - от модели к компонентам разметки
Сообщения отправляются из пользовательского интерфейса в форме событий, чтобы оповестить модель и она обновилась

## Двусторонняя привязка данных
Данные передаются в обоих направлениях, обновить модель может как JS так и пользовательский интерфейс






