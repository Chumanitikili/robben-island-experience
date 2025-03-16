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
    description: "Portuguese explorer Bartolomeu Dias first recorded the existence of the island.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bartolomeu_Dias_-_Livro_de_Lisuarte_de_Abreu_%281558%29.png/800px-Bartolomeu_Dias_-_Livro_de_Lisuarte_de_Abreu_%281558%29.png",
    imageAlt: "Historical illustration of Bartolomeu Dias from Livro de Lisuarte de Abreu (1558)",
    imageCredit: "Wikimedia Commons"
  },
  {
    year: 1652,
    title: "Dutch Settlement",
    description: "The Dutch began using Robben Island as a refreshment station and for sheep farming.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/AMH-6634-KB_View_of_Table_Bay.jpg/1280px-AMH-6634-KB_View_of_Table_Bay.jpg",
    imageAlt: "17th century Dutch painting of Table Bay with Robben Island visible",
    imageCredit: "National Archives of the Netherlands"
  },
  {
    year: 1846,
    title: "Hospital Establishment",
    description: "The island was converted into a hospital for people with leprosy, mental illness, and the chronically sick.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Robben_Island_Leper_Church.jpg/1280px-Robben_Island_Leper_Church.jpg",
    imageAlt: "Historical photograph of the Robben Island Leper Church",
    imageCredit: "Wikimedia Commons"
  },
  {
    year: 1961,
    title: "Prison Era Begins",
    description: "The island was converted into a maximum security prison for political prisoners.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Robben_Island_Prison.jpg/1280px-Robben_Island_Prison.jpg",
    imageAlt: "Robben Island Maximum Security Prison in the 1960s",
    imageCredit: "South African History Archive"
  },
  {
    year: 1964,
    title: "Mandela's Imprisonment",
    description: "Nelson Mandela arrived on Robben Island, where he would spend 18 of his 27 years in prison.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Prison_cell_of_Nelson_Mandela_on_Robben_Island.jpg/1280px-Prison_cell_of_Nelson_Mandela_on_Robben_Island.jpg",
    imageAlt: "Nelson Mandela's prison cell on Robben Island",
    imageCredit: "Wikimedia Commons"
  },
  {
    year: 1991,
    title: "Prison Closure",
    description: "All political prisoners were released from Robben Island as apartheid began to end.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Nelson_Mandela_1991.jpg/800px-Nelson_Mandela_1991.jpg",
    imageAlt: "Nelson Mandela in 1991 after his release",
    imageCredit: "Dutch National Archives"
  },
  {
    year: 1999,
    title: "UNESCO World Heritage Site",
    description: "Robben Island was declared a UNESCO World Heritage Site.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Robben_Island_World_Heritage_Site.jpg/1280px-Robben_Island_World_Heritage_Site.jpg",
    imageAlt: "Robben Island UNESCO World Heritage Site plaque",
    imageCredit: "UNESCO"
  },
  {
    year: 2024,
    title: "Modern Museum",
    description: "Today, the island stands as a powerful symbol of the triumph of democracy over oppression.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Robben_Island_Tour.jpg/1280px-Robben_Island_Tour.jpg",
    imageAlt: "Modern-day Robben Island Museum tour",
    imageCredit: "Robben Island Museum"
  }
];