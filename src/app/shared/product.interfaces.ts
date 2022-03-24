export interface Product {
    name: string;
    code: number;
    photo: string;
    brand: string;
    price: number;
    crossedPrice: number;
    datePublished: Date;
    isActive: boolean;
}

export interface NameColumm {
    name: string;
    select: boolean;
    subNameColumn?: NameColumm[];
}
