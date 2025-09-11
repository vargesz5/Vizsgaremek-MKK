export type Drink = {
    id: number;
    name: string;
    price: number;
    stock: boolean;
    image: string;
  };
export type DrinkCardProps = {
    drink: Drink;
    onSelect: () => void;
    cartAmount: number;
    updateCart: (id: number, amount: number) => void;
  };
export type DrinkDetailsProps = {
  drink: Drink;
  onBack: () => void;
};
