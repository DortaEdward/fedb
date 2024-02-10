
export type Card = {
  card_id: string;
  name: string;
  type: string;
  colors: string[];
  cost: string;
  traits: string[];
  attribute: null | string;
  power: null | string;
  counter_power: null | string;
  life: null | string;
  rarity: string;
  image_url: string;
  effect: null | string;
  set_name: string;
};
