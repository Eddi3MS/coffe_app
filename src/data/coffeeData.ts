import { ReactComponent as Tradicional } from "../assets/tradicional.svg";
import { ReactComponent as Arabe } from "../assets/arabe.svg";
import { ReactComponent as Americano } from "../assets/americano.svg";
import { ReactComponent as Gelado } from "../assets/gelado.svg";

export const CoffeeData = [
  {
    id: 1,
    title: "Expresso Tradicional",
    desc: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
    Image: Tradicional,
    badges: ["Tradicional"],
  },
  {
    id: 2,
    title: "Árabe",
    desc: "Bebida preparada com grãos de café árabe e especiarias",
    price: "9,90",
    Image: Arabe,
    badges: ["Especial"],
  },
  {
    id: 3,
    title: "Expresso Americano",
    desc: "Expresso diluído, menos intenso que o tradicional",
    price: "9,90",
    Image: Americano,
    badges: ["Tradicional"],
  },
  {
    id: 4,
    title: "Expresso Gelado",
    desc: "Bebida preparada com café expresso e cubos de gelo",
    price: "9,90",
    Image: Gelado,
    badges: ["Tradicional", "Gelado"],
  },
];
