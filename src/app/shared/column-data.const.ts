import { Column } from "./column.interfaces";

export const COLUMNS_DATA: Column[] = [
    {name: '', ref: 'select', display: true, static: true},
    {name: 'Название товара', ref: 'name', display: true, static: false},
    {name: 'Код товара', ref: 'code', display: true, static: false},
    {name: 'Фото товара', ref: 'photo', display: true, static: false},
    {name: 'Бренд товара', ref: 'brand', display: true, static: false},
    {name: 'Цена товара', ref: 'price', display: true, static: false},
    {name: 'Перечеркнутая цена', ref: 'crossedPrice', display: true, static: false},
    {name: 'Дата публикации', ref: 'datePublished', display: true, static: false},
    {name: 'Активность товара', ref: 'isActive', display: true, static: false},
];
