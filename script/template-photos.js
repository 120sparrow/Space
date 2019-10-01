'use strict';

let template = [
  {
    image: 'img/hystory/photos/shuttle Columbia white.jpg',
    alt: 'shuttle Columbia white',
    text: `
12 апреля 1981 года, ровно через 20 лет после первого полета Гагарина, в космос отправился первый шаттл "Колумбия", который пилотировали Джон Янг и Роберт Криппен.
`,
  },
  {
    image: 'img/hystory/photos/first fly.jpg',
    alt: 'first fly',
    text: `Главной целью первого полета "Колумбии" было окончательно проверить системы шаттла. Особое внимание уделялось ракетным ускорителям, трем главным двигателям и внешнему топливному баку. Кроме того, было необходимо убедится в надежности 2,5 млн подвижных частей космического корабля`,
  },
  {
    image: 'img/hystory/photos/Nixon and james fletcher.jpg',
    alt: 'Nixon and james fletcher',
    text: `
За 10 лет до первого полета президент Никсон (здесь он запечатлен с тогдашним шефом НАСА Джеймсом Флетчером) объявил о намерении США создать принципиально новую систему космических полетов
`,
  },
  {
    image: 'img/hystory/photos/shuttle Columbia.jpg',
    alt: 'shuttle Columbia',
    text: `
    Первый шаттл "Энтерпрайз" не был предназначен для полетов в космос, а использовался только как тестовый аппарат для отработки методов посадки. Первые испытания проводились, закрепляя шаттл на Боинге-747 для проверки его аэродинамических характеристик.
    `,
  },
  {
    image: 'img/hystory/photos/shuttle Chelenger.jpg',
    alt: 'shuttle Chelenger',
    text: `Второй шаттл – "Челленджер" – был назван по имени морского судна, которое исследовало океан в 1870-е годы. Первый полет "Челленджер" совершил 4 апреля 1983 года.`,
  },
  {
    image: 'img/hystory/photos/Chelender damage.jpg',
    alt: 'Chelender damage',
    text: `
Во время 10-го полета в 1986 году у "Челленджера" от одного из двух креплений оторвался левый твердотопливный ускоритель. Провернувшись вокруг второго, ускоритель пробил основной топливный бак, корабль отклонился от курса и был разрушен аэродинамическими силами. Все семь астронавтов погибли.
`,
  },
  {
    image: 'img/hystory/photos/Space_Shuttle_Discovery.jpg',
    alt: 'Space_Shuttle_Discovery',
    text: `
"Дискавери" – третий шаттл, был передан в эксплуатацию НАСА в ноябре 1982 года. Первый полет шаттл совершил 30 августа 1984 года, стартовав с мыса Канаверал. "Дискавери" совершил 39 полетов, больше, чем любой другой шаттл.
`,
  },
  {
    image: 'img/hystory/photos/Hubble_docked_in_the_cargo_bay.jpg',
    alt: 'Hubble_docked_in_the_cargo_bay',
    text: `
Шаттл "Дискавери" доставил на орбиту космический телескоп "Хаббл", а впоследствии участвовал в двух миссиях по его обслуживанию.`,
  },
  {
    image: 'img/hystory/photos/hubble.jpg',
    alt: 'hubble',
    text: `Захватывающие дух фотографии с шаттла "Атлантис" – астронавты выходят в открытый космос.`,
  },
  {
    image: 'img/hystory/photos/Mark Li.jpg',
    alt: 'Mark Li',
    text: `
Астронавт Марк Ли испытывает новую систему безопасности на шаттле "Дискавери" в 1994 году.
`,
  },
  {
    image: 'img/hystory/photos/space-shuttle-floats-in-space.jpg',
    alt: 'space-shuttle-floats-in-space',
    text: `
Этот снимок четвертого американского шаттла "Атлантис" был сделан с космической станции "Мир" в июне 1995 года. "Атлантис" совершил к российской космической станции семь полетов.
`,
  },
  {
    image: 'img/hystory/photos/Endeavor-11.jpg',
    alt: 'Endeavor-11',
    text: `
"Индевор" – пятый и последний космический челнок. Название предложили американские школьники: так назывался один из кораблей Джеймса Кука. "Индевор" был построен на замену погибшему "Челленджеру".
`,
  },
  {
    image: 'img/hystory/photos/STS_135_Launchl.jpg',
    alt: 'STS_135_Launchl',
    text: `
"Индевор" совершил 25 полетов, преодолев в общей сложности почти 198 млн километров.
`,
  },
  {
    image: 'img/hystory/photos/Shuttle and F-15.jpg',
    alt: 'Shuttle and F-15',
    text: `
Американский военный самолет F15-E патрулирует воздушное пространство над космическим центром имени Кеннеди в день старта "Атлантиса" в 2010 году.
`,
  },
  {
    image: 'img/hystory/photos/Endeavour and ISS.jpg',
    alt: 'Endeavour and ISS',
    text: `Стыковка шаттла "Индевор" к Международной космической станции. Различные корабли пристыковывались к МКС в общей сложности 36 раз.`,
  },
  {
    image: 'img/hystory/photos/STS-135.jpg',
    alt: 'STS-135',
    text: `Последняя экспедиция шаттла "Атлантис" к МКС стартует 8 июля 2011 года. За все время существования проекта американские челноки пролетели в общей сложности свыше 864,4 млн км, проведя в космосе 1320 дней, один час, 32 минуты и 44 секунды.`,
  },
  {
    image: 'img/hystory/photos/nasa_space_shuttle_atlantis_sts135.jpg',
    alt: 'nasa_space_shuttle_atlantis_sts135',
    text: `
Ожидается, что наблюдать последний запуск "Атлантиса" в Космический центр Кеннеди приедут от 500 тысяч до 1 млн зрителей.
`,
  },
];


let hystory = document.querySelector('.hystory');
let taskTemplate = hystory.querySelector('#template-photos').content;
let photoTemplate = taskTemplate.querySelector('.hystory-photos');

for (let item of template) {

  let photoClone = photoTemplate.cloneNode(true);
  let cloneImg = photoClone.querySelector('.hystory-photos-img img');
  let cloneText = photoClone.querySelector('.hystory-photos-description p');
  cloneImg.src = item.image;
  cloneImg.alt = item.alt;
  cloneText.textContent = item.text;
  hystory.appendChild(photoClone);

};
