---
title: "Оценка УКТ"
description: "Трёхпараметрическая пятибалльная система оценки значимости программ, проектов и любых начинаний в целом"
icon: ukt.svg
date: 2022-02-08
---


<script setup>
import {reactive} from 'vue'
import { useClamp } from '@vueuse/math'

const ukt = reactive({
  y:useClamp(3,0,5),
  k:useClamp(2,0,5),
  t:useClamp(5,0,5)
  })

function drag(e) {
  let [x,y] = e.delta
  if (x>0 && y<0 || x<0 && y>0) {
    ukt.y -= y/10
    ukt.y += x/10
  } else {
    ukt.t += x / 10
    ukt.k -= y / 10
  }
}

const us = [
  {y:0,k:0,t:0},
  {y:1,k:0,t:0},
  {y:2,k:0,t:0},
  {y:3,k:0,t:0},
  {y:4,k:0,t:0},
  {y:5,k:0,t:0},
]

const ks = [
  {y:0,k:0,t:0},
  {y:0,k:1,t:0},
  {y:0,k:2,t:0},
  {y:0,k:3,t:0},
  {y:0,k:4,t:0},
  {y:0,k:5,t:0},
]

const ts = [
  {y:0,k:0,t:0},
  {y:0,k:0,t:1},
  {y:0,k:0,t:2},
  {y:0,k:0,t:3},
  {y:0,k:0,t:4},
  {y:0,k:0,t:5},
]

</script>


<ukt-ring class="cursor-pointer" v-model="ukt" v-drag="drag" />

> Чтобы изменить оценку, начните перетаскивать круг мышкой/касанием. Творчество регулируется горизонтальным перемещением, Кооперация - вертикальным, Универсализация - диагональным.

Каждый человек, так или иначе взаимодействующий с проектом, может дать свою оценку УКТ. Он рассматривает влияние этого начинания конкретно на него самого:

- насколько проект расширяет кругозор и приносит новые навыки и умения,
- насколько глубока степень сотрудничества разных людей в его реализации и
- насколько ценны и выразительны его результаты.

Автор оценки ставит от 0 до 5 баллов по трём параметрам и даёт свой пояснительный комментарий. Если у программы или проекта несколько оценок УКТ, то общая оценка считается как среднее округленное до большего целого значения по каждому параметру.


## Универсализация

<div class="flex flex-wrap">
<ukt-ring style="flex: 1 1 100px" v-for="u in us" :key="u" :modelValue="u" />
</div>

1. «Это моя специальность и все как обычно»
2. «Я это умею, но условия непривычные»
3. «Я смогу отточить существующие умения»
4. «Я освою новые приемы и техники»
5. «Для меня это новое умение»
6. «Это совершенно новое и неизвестное для меня»


## Кооперация

<div class="flex flex-wrap">
<ukt-ring style="flex: 1 1 100px" v-for="u in ks" :key="u" :modelValue="u" />
</div>


0. «Буду справляться в одиночку»
1. «Понадобится чья-то небольшая помощь»
2. «Часть задач будет делегирована исполнителям»
3. «Работа будет распределена между несколькими участниками»
4. «Будем действовать скоординированной группой»
5. «Реализуем это слаженной командой»

## Творчество

<div class="flex flex-wrap">
<ukt-ring style="flex: 1 1 100px" v-for="u in ts" :key="u" :modelValue="u" />
</div>

0. «В результате все остается как было»
1. «Будут незначительные улучшения»
2. «Положительные изменения будут заметны»
3. «Будет создано что-то новое»
4. «В результате получится нечто новое, полезное или просто красивое»
5. «В итоге мы создадим что-то прекрасное»
