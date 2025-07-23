export type EntryData = {
  id: number;
  img: {
    src: string;
    alt: string;
  };
  title: string;
  country: string;
  googleMapsLink: string;
  dates: string;
  text: string;
};
const data: EntryData[] = [
  {
    id: 1,
    img: {
      src: "https://scrimba.com/links/travel-journal-japan-image-url",
      alt: "Mount Fuji",
    },
    title: "Mount Fuji",
    country: "Japan",
    googleMapsLink: "https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9",
    dates: "12 Jan, 2021 - 24 Jan, 2021",
    text: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
  },
  {
    id: 2,
    img: {
      src: "https://scrimba.com/links/travel-journal-australia-image-url",
      alt: "Sydney Opera House",
    },
    title: "Sydney Opera House",
    country: "Australia",
    googleMapsLink: "https://maps.app.goo.gl/Zr17SCrsJeCEKMd36",
    dates: "27 May, 2021 - 8 Jun, 2021",
    text: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
  },
  {
    id: 3,
    img: {
      src: "https://scrimba.com/links/travel-journal-norway-image-url",
      alt: "Geirangerfjord",
    },
    title: "Geirangerfjord",
    country: "Norway",
    googleMapsLink: "https://maps.app.goo.gl/fhkJuBhmFDv47tiB7",
    dates: "01 Oct, 2021 - 18 Nov, 2021",
    text: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
  },
  {
    id: 4,
    img: {
      src: "https://preview.redd.it/i8hs1jtz6ye51.jpg?width=640&crop=smart&auto=webp&s=7d08ccbdac0be8408c1022ebdd474591956979f3",
      alt: "Sigiriya Rock Fortress",
    },
    title: "Sigiriya",
    country: "Sri Lanka",
    googleMapsLink: "https://maps.app.goo.gl/Z1J5YUEtugHd7cyR6",
    dates: "15 Aug, 2023 - 20 Aug, 2023",
    text: "Sigiriya, also known as Lion Rock, is an ancient rock fortress located in the northern Matale District of Sri Lanka. It is famous for its stunning frescoes, mirror wall, and impressive water gardens.",
  },
  {
    id: 5,
    img: {
      src: "https://www.worldtribune.org/wp-content/uploads/sites/2/2023/02/GrandPlace_GettyImages-1456761179.jpg",
      alt: "Grand Place in Brussels",
    },
    title: "Brussels",
    country: "Belgium",
    googleMapsLink: "https://maps.app.goo.gl/MC6NhJjQoL8voPUz6",
    dates: "01 Dec, 2023 - 05 Dec, 2023",
    text: "Brussels is the capital of Belgium and the heart of European politics. The Grand Place is a must-see with its opulent architecture, and the waffles? Life-changing.",
  },
];

export default data;
