import {Request} from 'express';


export interface Product{
    PID: string;
    PNAME: string;
    PRICE: number;
}


interface addProduct{
    PNAME: string;
    PRICE: number;
}

export interface ProductRequest extends Request{
    body:addProduct;
}


