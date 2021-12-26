export interface Student {
  id: number;
  fullname: string;
  address?: string;
  age?: number;
  email: string;
  phone: string;
  gender?: string;
}

export const ListDataStudent: Array<Student> = [
  {
    id: 1,
    fullname: "Nguyen Tien Huy",
    address: "Thai Binh",
    age: 20,
    email: "tienhuy@gmail.com",
    phone: "099999999",
    gender: "nam",
  },
  {
    id: 2,
    fullname: "Nguyen Sy Thuong",
    address: "Hai Duong",
    age: 20,
    email: "thuongns@gmail.com",
    phone: "099999999",
    gender: "nu",
  },
  {
    id: 3,
    fullname: "Mai Ngoc Son",
    address: "Nam Dinh",
    age: 20,
    email: "sonmn2@gmail.com",
    phone: "099999999",
    gender: "nam",
  },
  {
    id: 4,
    fullname: "Tran Le Tung",
    address: "Nam Dinh",
    age: 20,
    email: "tungtl@gmail.com",
    phone: "099999999",
    gender: "nu",
  },
];
