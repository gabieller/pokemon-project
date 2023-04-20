export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    sprites: {
      front_default: string;
    };
    height: number;
    weight: number;
    types: {
      type: {
        name: string;
        url: string;
      };
    }[];
    abilities: {
      ability: {
        name: string;
      };
    }[];
    stats: {
      base_stat: number;
      stat: {
        name: string;
      };
    }[];
  }