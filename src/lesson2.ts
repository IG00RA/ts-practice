// interface User {
//   name: string;
//   age: number;
//   email: string;
// }

// // Реалізуйте Params так, щоб унеможливити поле 'errors' з типу Form
// type Params = Partial<User>;

// const update: Params = {
//   email: "newemail@example.com",
// };

// export {};

// interface Config {
//   host: string;
//   port: number;
//   protocol: string;
// }
// const fullConfig: Config = {
//   host: "localhost",
//   port: 3000,
//   protocol: "https",
// };
// type SomeConfig = Partial<Config>;

// const handleSettings = (obj: SomeConfig): Config => {
//   return { ...fullConfig, ...obj };
// };

// handleSettings({ host: "igoora.site" });

// const numbersArray = (array: ReadonlyArray<number>): number[] => {
//   return Array.from(array);
// };

// numbersArray([1, 2, 3, 4, 5]);

// interface Config {
//   host: string;
//   port: number;
//   protocol: string;
// }

// type UnchangedConfig = Readonly<Config>;

// const config: UnchangedConfig = {
//   host: "https://api.example.com",
//   port: 5000,
//   protocol: "string",
// };

// const someUser = {
//   name: "Bob",
//   age: 23,
//   email: "string@dsafds.com",
// };

// interface SomeUser {
//   name: string;
//   age: number;
//   email: string;
// }

// const userEmailAndName = (user: SomeUser): Pick<SomeUser, "email" | "name"> => {
//   const userWithoutAge = {
//     name: user.name,
//     email: user.email,
//   };
//   return userWithoutAge;
// };

// userEmailAndName(someUser);

// interface ApiResponse {
//   id: number;
//   title: string;
//   content: string;
//   createdAt: number;
// }

// const apiResponse = {
//   id: 333,
//   title: "string",
//   content: "string",
//   createdAt: 33,
// };

// const someApiFields = (
//   response: ApiResponse
// ): Pick<ApiResponse, "id" | "title"> => {
//   return {
//     id: response.id,
//     title: response.title,
//   };
// };
// someApiFields(apiResponse);

// const users: Record<string, number> = {
//   alice: 30,
//   bob: 22,
// };

// const month: Record<string, number> = {
//   jan: 30,
//   fab: 22,
// };

// interface User {
//   username: string;
//   password: string;
//   email: string;
// }

// type NewUser = Omit<User, "password">;
// const userToSend: NewUser = {
//   username: "Alice",
//   email: "alice@example.com",
// };

// interface ApiResponse {
//   id: number;
//   title: string;
//   content: string;
//   createdAt: number;
// }

// const apiResponse: ApiResponse = {
//   id: 333,
//   title: "string",
//   content: "string",
//   createdAt: 33,
// };

// type ApiWithoutDate = Omit<ApiResponse, "createdAt">;

// const apiResponseWithoutDate: ApiWithoutDate = {
//   id: 333,
//   title: "string",
//   content: "string",
// };

// interface Menu {
//   title: string;
//   price: number;
//   category: "appetizer" | "main course" | "dessert";
// }

// const menu: Menu[] = [
//   { title: "Салат Цезар", price: 10.99, category: "appetizer" },
//   { title: "Стейк зі свинини", price: 15.99, category: "main course" },
//   { title: "Тірамісу", price: 5.99, category: "dessert" },
//   { title: "Суп грибний", price: 8.99, category: "appetizer" },
// ];

// const filteredMenu = (dishes: Menu[], category: string): Menu[] => {
//   return dishes.filter((dish) => dish.category === category);
// };

// filteredMenu(menu, "dessert");

// interface User {
//   name: string;
//   email: string;
//   dateOfBirth: Date;
// }

// const user: User = {
//   name: "Ihor",
//   email: "sg@sdfd.com",
//   dateOfBirth: new Date("1995-12-10"),
// };

// const isAdult = (user: User): boolean => {
//   const today = new Date();
//   const age = today.getFullYear() - user.dateOfBirth.getFullYear();

//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// };
// isAdult(user);

// interface CarProperties {
//   brand: string;
//   year: number;
//   fuelType: "petrol" | "diesel" | "electric";
// }

// class Car implements CarProperties {
//   constructor(
//     public brand: string,
//     public year: number,
//     public fuelType: "petrol" | "diesel" | "electric"
//   ) {}

//   getDetails() {
//     console.log(
//       `This is a ${this.year} ${this.brand} that runs on ${this.fuelType}.`
//     );
//   }
// }

// interface StudentData {
//   name: string;
//   studentID: number;
//   major: string;
// }

// class Student implements StudentData {
//   constructor(
//     public name: string,
//     public studentID: number,
//     public major: string
//   ) {}

//   introduce() {
//     console.log(
//       `Let me introduce my self.My name is ${this.name} , my id is ${this.studentID} and my major is ${this.major}.`
//     );
//   }
// }
