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
    image: "/images/timeline/bartolomeu-dias.jpg",
    imageAlt: "Historical illustration of Bartolomeu Dias's ship",
    imageCredit: "From Livro de Lisuarte de Abreu, Public Domain"
  },
  {
    year: 1652,
    title: "Dutch Settlement",
    description: "Jan van Riebeeck establishes the island as a refreshment station for the Dutch East India Company.",
    image: "/images/timeline/van-riebeeck-arrival.jpg",
    imageAlt: "Painting of Jan van Riebeeck's arrival in Table Bay",
    imageCredit: "Charles Bell, Public Domain"
  },
  {
    year: 1806,
    title: "British Control",
    description: "The British take control of the Cape Colony and Robben Island.",
    image: "/images/timeline/british-control.jpg",
    imageAlt: "Illustration of the Battle of Blaauwberg",
    imageCredit: "Thomas Baines, Public Domain"
  },
  {
    year: 1846,
    title: "Establishment of Hospital",
    description: "Robben Island becomes a hospital for chronically ill patients.",
    image: "/images/timeline/hospital.jpg",
    imageAlt: "Historic photograph of Robben Island Hospital",
    imageCredit: "Historical Archives"
  },
  {
    year: 1961,
    title: "Prison Establishment",
    description: "The island is converted into a maximum security prison for political prisoners.",
    image: "/images/timeline/prison-aerial.jpg",
    imageAlt: "Aerial view of Robben Island Prison",
    imageCredit: "South African Government Archives"
  },
  {
    year: 1964,
    title: "Mandela's Imprisonment",
    description: "Nelson Mandela begins his 18-year imprisonment on Robben Island.",
    image: "/images/timeline/mandela-cell.jpg",
    imageAlt: "Nelson Mandela's prison cell on Robben Island",
    imageCredit: "South African Tourism Board"
  },
  {
    year: 1991,
    title: "Last Political Prisoners Released",
    description: "The last political prisoners are released from Robben Island.",
    image: "/images/timeline/prisoners-release.jpg",
    imageAlt: "Release of political prisoners from Robben Island",
    imageCredit: "South African Press Association"
  },
  {
    year: 1997,
    title: "Museum Opening",
    description: "Robben Island becomes a museum and national monument.",
    image: "/images/timeline/museum.jpg",
    imageAlt: "Robben Island Museum entrance",
    imageCredit: "UNESCO World Heritage Site"
  },
  {
    year: 1999,
    title: "UNESCO World Heritage Site",
    description: "Robben Island is declared a UNESCO World Heritage Site.",
    image: "/images/timeline/unesco.jpg",
    imageAlt: "UNESCO World Heritage Site plaque at Robben Island",
    imageCredit: "UNESCO"
  },
  {
    year: 2024,
    title: "Modern Day",
    description: "Robben Island continues to serve as a powerful symbol of freedom and democracy.",
    image: "/images/timeline/modern-aerial.jpg",
    imageAlt: "Modern aerial view of Robben Island",
    imageCredit: "South African Tourism Board"
  }
];