export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageCredit?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: 1488,
    title: "First European Contact",
    description: "Bartolomeu Dias first spots Robben Island while searching for a spice route to the East.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Bartolomeu_Dias_-_Livro_de_Lisuarte_de_Abreu.jpg/800px-Bartolomeu_Dias_-_Livro_de_Lisuarte_de_Abreu.jpg",
    imageAlt: "Historical illustration of Bartolomeu Dias's ship",
    imageCredit: "From Livro de Lisuarte de Abreu, Public Domain"
  },
  {
    year: 1652,
    title: "Dutch Settlement",
    description: "Jan van Riebeeck establishes the island as a refreshment station for the Dutch East India Company.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Arrival_of_Jan_van_Riebeeck_in_Table_Bay.jpg/800px-Arrival_of_Jan_van_Riebeeck_in_Table_Bay.jpg",
    imageAlt: "Painting of Jan van Riebeeck's arrival in Table Bay",
    imageCredit: "Charles Bell, Public Domain"
  },
  {
    year: 1806,
    title: "British Control",
    description: "The British take control of the Cape Colony and Robben Island.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Battle_of_Blaauwberg_-_1806.jpg/800px-Battle_of_Blaauwberg_-_1806.jpg",
    imageAlt: "Illustration of the Battle of Blaauwberg",
    imageCredit: "Thomas Baines, Public Domain"
  },
  {
    year: 1846,
    title: "Establishment of Hospital",
    description: "Robben Island becomes a hospital for chronically ill patients.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Robben_Island_Hospital.jpg/800px-Robben_Island_Hospital.jpg",
    imageAlt: "Historic photograph of Robben Island Hospital",
    imageCredit: "Historical Archives"
  },
  {
    year: 1961,
    title: "Prison Establishment",
    description: "The island is converted into a maximum security prison for political prisoners.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Robben_Island_Prison.jpg/800px-Robben_Island_Prison.jpg",
    imageAlt: "Aerial view of Robben Island Prison",
    imageCredit: "South African Government Archives"
  },
  {
    year: 1964,
    title: "Mandela's Imprisonment",
    description: "Nelson Mandela begins his 18-year imprisonment on Robben Island.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Nelson_Mandela%27s_prison_cell.jpg/800px-Nelson_Mandela%27s_prison_cell.jpg",
    imageAlt: "Nelson Mandela's prison cell on Robben Island",
    imageCredit: "South African Tourism Board"
  },
  {
    year: 1991,
    title: "Last Political Prisoners Released",
    description: "The last political prisoners are released from Robben Island.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Release_of_political_prisoners_Robben_Island.jpg/800px-Release_of_political_prisoners_Robben_Island.jpg",
    imageAlt: "Release of political prisoners from Robben Island",
    imageCredit: "South African Press Association"
  },
  {
    year: 1997,
    title: "Museum Opening",
    description: "Robben Island becomes a museum and national monument.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Robben_Island_Museum.jpg/800px-Robben_Island_Museum.jpg",
    imageAlt: "Robben Island Museum entrance",
    imageCredit: "UNESCO World Heritage Site"
  },
  {
    year: 1999,
    title: "UNESCO World Heritage Site",
    description: "Robben Island is declared a UNESCO World Heritage Site.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/UNESCO_World_Heritage_Site_Robben_Island.jpg/800px-UNESCO_World_Heritage_Site_Robben_Island.jpg",
    imageAlt: "UNESCO World Heritage Site plaque at Robben Island",
    imageCredit: "UNESCO"
  },
  {
    year: 2024,
    title: "Modern Day",
    description: "Robben Island continues to serve as a powerful symbol of freedom and democracy.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Robben_Island_Aerial_View.jpg/800px-Robben_Island_Aerial_View.jpg",
    imageAlt: "Modern aerial view of Robben Island",
    imageCredit: "South African Tourism Board"
  }
];