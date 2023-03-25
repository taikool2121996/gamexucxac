export type IDiceGame = {
  taiXiu: boolean;
  soBanThang: number;
  soBanChoi: number;
  mangXucXac: Array<IDice>;
};

export type IDice = {
  value: number;
  image: string;
};
