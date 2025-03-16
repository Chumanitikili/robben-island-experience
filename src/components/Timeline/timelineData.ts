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
    description: "Bartolomeu Dias becomes the first known European to sight the island.",
    image: "/images/timeline/1488-bartolomeu-dias.jpg",
    imageAlt: "Historical illustration of Bartolomeu Dias's ship near Robben Island",
    imageCredit: "Historical Archives"
  },
  {
    year: 1652,
    title: "Dutch Settlement",
    description: "Jan van Riebeeck establishes the island as a refreshment station for the Dutch East India Company.",
    image: "/images/timeline/1652-dutch-settlement.jpg",
    imageAlt: "Early Dutch settlement on Robben Island",
    imageCredit: "Cape Archives"
  },
  {
    year: 1671,
    title: "Prison Establishment",
    description: "The island begins its long history as a place of banishment and imprisonment.",
    image: "/images/timeline/1671-prison.jpg",
    imageAlt: "Early prison structures on Robben Island",
    imageCredit: "South African Heritage"
  },
  {
    year: 1846,
    title: "Lighthouse Construction",
    description: "Construction of the island's lighthouse to aid maritime navigation.",
    image: "/images/timeline/1846-lighthouse.jpg",
    imageAlt: "Historic Robben Island lighthouse",
    imageCredit: "Maritime Archives"
  },
  {
    year: 1961,
    title: "Maximum Security Prison",
    description: "The island is converted into a maximum security prison for political prisoners.",
    image: "/images/timeline/1961-maximum-security.jpg",
    imageAlt: "Maximum security prison buildings",
    imageCredit: "Apartheid Museum"
  },
  {
    year: 1964,
    title: "Mandela's Imprisonment",
    description: "Nelson Mandela begins his 18-year imprisonment on Robben Island.",
    image: "/images/timeline/1964-mandela.jpg",
    imageAlt: "Nelson Mandela's prison cell on Robben Island",
    imageCredit: "Robben Island Museum"
  },
  {
    year: 1991,
    title: "Prison Closure",
    description: "The prison is closed as South Africa begins its transition to democracy.",
    image: "/images/timeline/1991-closure.jpg",
    imageAlt: "Last prisoners leaving Robben Island",
    imageCredit: "South African Archives"
  },
  {
    year: 1997,
    title: "Museum Opening",
    description: "Robben Island becomes a museum and national heritage site.",
    image: "/images/timeline/1997-museum.jpg",
    imageAlt: "Robben Island Museum opening ceremony",
    imageCredit: "Museum Archives"
  },
  {
    year: 1999,
    title: "UNESCO World Heritage Site",
    description: "The island is declared a UNESCO World Heritage Site.",
    image: "/images/timeline/1999-unesco.jpg",
    imageAlt: "UNESCO World Heritage Site declaration ceremony",
    imageCredit: "UNESCO"
  },
  {
    year: 2024,
    title: "Modern Heritage",
    description: "Robben Island continues to stand as a symbol of freedom and democracy.",
    image: "/images/timeline/2024-heritage.jpg",
    imageAlt: "Modern-day aerial view of Robben Island",
    imageCredit: "Robben Island Museum"
  }
];