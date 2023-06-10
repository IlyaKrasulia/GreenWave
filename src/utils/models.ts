
export interface IGas {
  typeOil: OilType;
  price: number;
  produser: Producer;
  color: string;
}

export type OilType = '95' | 'A-95' | 'ДП' | 'ГАЗ';

export type Producer = 'Mustang' | 'Євро5';
