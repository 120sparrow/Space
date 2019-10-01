'use strict';

let misiions = [
  {
    date: `8 июля 2011`, fly: `STS-135`, shuttle: `Атлантис`, team: `4`, duration: `12 суток 18 часов`, landing: `Кеннеди`,
  },
  {
    date: `16 мая 2011`, fly: `STS-134`, shuttle: `Индевор`, team: `6`, duration: `15 суток 18 часов`, landing: `Кеннеди`,
  },
  {
    date: `24 февраля 2011`, fly: `STS-133`, shuttle: `Дискавери`, team: `6`, duration: `12 суток 19 часов`, landing: `Кеннеди`,
  },
  {
    date: `14 мая 2010`, fly: `STS-132`, shuttle: `Атлантис`, team: `6`, duration: `11 суток 18 часов`, landing: `Кеннеди`,
  },
  {
    date: `5 апреля 2010`, fly: `STS-131`, shuttle: `Дискавери `, team: `7`, duration: `15 суток 3 часа`, landing: `Кеннеди`,
  },
  {
    date: `8 февраля 2010`, fly: `STS-130`, shuttle: `Индевор`, team: `6`, duration: `13 суток 18 часов`, landing: `Кеннеди`,
  },
  {
    date: `16 ноября 2009`, fly: `STS-129`, shuttle: `Атлантис`, team: `6/7`, duration: `10 суток 19 часов`, landing: `Кеннеди`,
  },
  {
    date: `28 августа 2009`, fly: `STS-128`, shuttle: `Дискавери`, team: `7/7`, duration: `13 суток 21 час`, landing: `Эдвардс`,
  },
  {
    date: `15 июля 2009`, fly: `STS-127`, shuttle: `Индевор`, team: `7/7`, duration: `15 суток 16 часов`, landing: `Кеннеди`,
  },
  {
    date: `11 мая 2009`, fly: `STS-125`, shuttle: `Атлантис`, team: `7`, duration: `12 суток 21 час`, landing: `Эдвардс`,
  },
  {
    date: `15 марта 2009`, fly: `STS-119`, shuttle: `Дискавери `, team: `7/7`, duration: `12 суток 19 часов`, landing: `Кеннеди`,
  },
  {
    date: `14 ноября 2008`, fly: `STS-126`, shuttle: `Индевор`, team: `7/7`, duration: `15 суток 20 часов`, landing: `Эдвардс`,
  },
  {
    date: `31 мая 2008`, fly: `STS-124`, shuttle: `Дискавери`, team: `7/7`, duration: `13 суток 18 часов`, landing: `Кеннеди`,
  },
  {
    date: `11 марта 2008`, fly: `STS-123`, shuttle: `Индевор`, team: `7/7`, duration: `15 суток 18 часов`, landing: `Кеннеди`,
  },
  {
    date: `7 февраля 2008`, fly: `STS-122`, shuttle: `Атлантис`, team: `7/7`, duration: `12 суток 18 часов`, landing: `Кеннеди`,
  },
  {
    date: `23 октября 2007`, fly: `STS-120`, shuttle: `Дискавери`, team: `7/7`, duration: `15 суток 2 часа`, landing: `Кеннеди`,
  },
  {
    date: `8 августа 2007`, fly: `STS-118`, shuttle: `Индевор`, team: `7`, duration: `12 суток 18 часов`, landing: `Кеннеди`,
  },
  {
    date: `8 июня 2007`, fly: `STS-117`, shuttle: `Атлантис`, team: `7/7`, duration: `13 суток 20 часов`, landing: `Эдвардс`,
  },
  {
    date: `9 декабря 2006`, fly: `STS-116`, shuttle: `Дискавери`, team: `7/7`, duration: `12 суток 21 час`, landing: `Кеннеди`,
  },
  {
    date: `9 сентября 2006`, fly: `STS-115`, shuttle: `Атлантис`, team: `6`, duration: `11 суток 19 часов`, landing: `Кеннеди`,
  },
  {
    date: `4 июля 2006`, fly: `STS-121`, shuttle: `Дискавери`, team: `7/6`, duration: `12 суток 18 часов`, landing: `Кеннеди`,
  },
  {
    date: `26 июля 2005`, fly: `STS-114`, shuttle: `Дискавери `, team: `7`, duration: `13 суток 21 час`, landing: `Эдвардс`,
  },
];

let misiionsTable = document.querySelector('.misiions-table');
let tamplateMissions = document.querySelector('#template-misiions').content;

for (let item of misiions) {

  let clone = tamplateMissions.cloneNode(true);
  let cleneDate = clone.querySelector('.missions-table-item-date');
  let cloneFly = clone.querySelector('.missions-table-item-fly');
  let cloneShuttle = clone.querySelector('.missions-table-item-shuttle');
  let cloneTeam = clone.querySelector('.missions-table-item-team');
  let cloneDuration = clone.querySelector('.missions-table-item-duration');
  let cloneLanding = clone.querySelector('.missions-table-item-landing');

  cleneDate.textContent = item.date;
  cloneFly.textContent = item.fly;
  cloneShuttle.textContent = item.shuttle;
  cloneTeam.textContent = item.team;
  cloneDuration.textContent = item.duration;
  cloneLanding.textContent = item.landing;

  misiionsTable.appendChild(clone);

}
