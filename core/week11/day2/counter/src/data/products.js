const products = [
  {
    id: 1,
    name: "Manzanita verde",
    category: { id: 1, name: "Alimentación" },
    stock: 31,
    price: 1.35,
  },
  {
    id: 2,
    name: "Asustaviejas 2000",
    category: { id: 2, name: "Artículos de broma" },
    stock: 11,
    price: 12.1,
  },
  {
    id: 3,
    name: "Disfraz de perrete",
    category: { id: 2, name: "Artículos de broma" },
    stock: 22,
    price: 9.14,
  },
  {
    id: 4,
    name: "Puerros",
    category: { id: 1, name: "Alimentación" },
    stock: 4,
    price: 30.15,
  },
  {
    id: 5,
    name: "Cacahuetes",
    category: { id: 1, name: "Alimentación" },
    stock: 1,
    price: 2.13,
  },
  {
    id: 6,
    name: "Barril de alcohol isopropilico",
    category: { id: 3, name: "Ferretería" },
    stock: 12,
    price: 124,
  },
  {
    id: 7,
    name: "Sacatuercas instantáneo",
    category: { id: 3, name: "Ferretería" },
    stock: 2,
    price: 33.12,
  },
];

export function getProducts() {
  return products;
}
