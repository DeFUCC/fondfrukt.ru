---
title: Онлайн словарь v3
description: "Vite + Gun + pug + stylus — быстрое и стабильное веб-приложение для игры"
date: 2021-02-01
status: development

cover: eto.png
opportunities:
  - verb: "Добавить "
    text: "придуманное слово в словарь"
    link: "https://app.etovoteto.ru/#word"
  - verb: Добавить
    text: "определение придуманного понятия"
    link: "https://app.etovoteto.ru/#def"
---

Онлайн-словарь придуманных слов и определений — минимальная система структурированной коммуникации. Каждый участник может добавлять свои высказывания и связывать друг с другом уже существующие. В итоге получается граф — система взаимосвязанных точек.

Я выбрал этот формат для того, чтобы реализовать наработанные за последние годы навыки веб-программирования. Я замахивался на более крупный проект совместной проектной работы, но решил сначала собрать всю базу на чуть менее сложном проекте. Именно поэтому для сравнительно простой задачи используются удивительные суперсовременные технологии вроде контентной адресации данных и асимметричного шифрования, криптографических подписей и сертификатов.

В своей основе словарь — это в высокой степени децентрализованное клиентское веб-приложение. Статический сервер отдает файлы браузеру, а все потоки данных двигаются через веб-сокеты и webrtc между клиентами и пересылающими узлами. Благодаря новейшей структуре данных CRDT данные, разбросанная между множеством устройств информация может оставаться непротиворечивой. Это позволяет отказаться даже от сервера авторизации, реализовав ее прямо в браузере на основе встроенного в него сильного шифрования. Все эти удивительные качества привносит в программу библиотека [GUN](https://gun.eco).

Помимо этого само приложение разрабатывается с использованием утрасовременных инструментов веб-разработки. На базе сборочной системы [vite](https://vitejs.dev) с набором мощных плагинов настроен очень эффективный процесс.

В системе применено важнейшее дополнение библиотеки GUN — система сертификатов, позволяющая полностью уйти от публичного графа и работать в специально настроенных "комнатах" с различными правами на редактирование. Потенциал этой платформы огромен.
