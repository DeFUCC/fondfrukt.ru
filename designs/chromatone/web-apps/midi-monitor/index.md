---
title: "MIDI монитор"
description: "Веб-приложение для визуализации и координации MIDI-сигналов"
status: product
opportunities:
  - verb: Мониторить
    text: "MIDI-события прямо в браузере"
    link: "https://midi.chromatone.center"
  - verb: Разрабатывать
    text: "приложение совместно на GitHub"
    link: "https://github.com/DeFUCC/midi-paper"
---

![](./screencapture-chromatone-center-apps-web-audio-components-2019-11-21-20_18_36.png)

В проекте использованы:

- [VueJS](https://vuejs.org)
- [WebMIDI](https://djipco.github.io/webmidi/latest/classes/WebMidi.html)

Веб-приложение работает на десктопе в браузерах **Google Chrome**, **Safari**, на Андроиде — в **Chrome**, в iOS потребуется бесплатный [WebMIDI browser](https://apps.apple.com/us/app/web-midi-browser/id953846217)

Отображает активные и исполненные ноты, команды CC и их значения. Может отправлять команды на подключенные устройства. Может перенаправлять входящие команды на выбранные миди-порты.
