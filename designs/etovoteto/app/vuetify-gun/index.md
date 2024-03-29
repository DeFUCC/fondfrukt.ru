---
title: "Vuetify + GUN"
description: "Классическое JS AJAX приложение с использованием PHP headless CMS"
cover: app.png

status: finished
date: 2020-03-03
end_date: 2020-04-04
opportunities:
  - verb: "Открыть код"
    text: "приложения на GitHub"
    link: "https://github.com/etovoteto/etovoteto-app"
  - verb: "Листать и добавлять"
    text: "придуманные слова и их значения в приложении"
    link: "https://app.etovoteto.ru"
---

Вторая версия словаря ЭТОВОТЭТО получилась куда быстрее и интереснее. Распределенная графовая база данных позволила легко создавать слова и определения, связывать их друг с другом, как симметрично, так и нет.

База данных хранится прямо в браузере и синхронизируется через промежуточные серверы GUN, работающе в среде NodeJS на бесплатных мощностях [Glitch.com](https://www.glitch.com).

Карточки закрыты рубашкой и открываются при первом клике/тапе. Затем можно увидеть списки связанных карточек, добавить что-то свое.

GUN освобождает от проблем с разработкой бэкенда, но добавляет сложностей с разработкой криптографической системы защиты данных в распределенной базе данных. А также за неимением своего надежного сервера с бэкапами, данные иногда теряются. Проект свеж и смел, но тоже уперся в ограничения масштабирования клиентского приложения. Будем пересобирать его уже с Vue 3 под капотом.
