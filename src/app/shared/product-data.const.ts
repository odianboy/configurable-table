import { Product } from "../shared/product.interfaces";

export const SHOP_DATA: Product[] = [
    {name: 'Молоко', code: genCode(), photo: '1', brand: 'Коровка из Кореновки', price: 50, crossedPrice: 70, datePublished: new Date(),isActive: true},
    {name: 'Сок', code: genCode(), photo: '2', brand: 'Фруктовый сад', price: 70, crossedPrice: 100, datePublished: new Date(),isActive: false},
    {name: 'Шоколад', code: genCode(), photo: '3', brand: 'Бабаевский', price: 45, crossedPrice: 60, datePublished: new Date(),isActive: true},
    {name: 'Печенье', code: genCode(), photo: '4', brand: 'Юбилейное', price: 30, crossedPrice: 50, datePublished: new Date(),isActive: true},
    {name: 'Газировка', code: genCode(), photo: '5', brand: 'Золотой ключик', price: 55, crossedPrice: 85, datePublished: new Date(),isActive: false},
    {name: 'Мороженное', code: genCode(), photo: '6', brand: 'Большой папа', price: 40, crossedPrice: 80, datePublished: new Date(),isActive: true},
    {name: 'Чипсы', code: genCode(), photo: '7', brand: 'Русская картошка', price: 50, crossedPrice: 70, datePublished: new Date(),isActive: true},
    {name: 'Хлеб', code: genCode(), photo: '8', brand: 'Пашковский', price: 35, crossedPrice: 40, datePublished: new Date(),isActive: true},
    {name: 'Мясо', code: genCode(), photo: '9', brand: 'Агрокомплекс', price: 50, crossedPrice: 70, datePublished: new Date(),isActive: false},
    {name: 'Сахар', code: genCode(), photo: '10', brand: 'Сахарный завод', price: 50, crossedPrice: 70, datePublished: new Date(),isActive: true},
];

function genCode(): number {
    return Math.round(Math.random() * 10000000);
};
