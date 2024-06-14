import { Request, Response, RequestHandler } from "express";
import mssql from 'mssql';
import { v4 as uid } from "uuid";
import { Product, ProductRequest } from "../Models/Product";
import { sqlConfig } from "../config";

export const addProduct = async (req: ProductRequest, res: Response) => {
    try {
        const id = uid()
        //make a connection to the server
        const pool = await mssql.connect(sqlConfig)
        //add a product to the database
        const { PNAME, PRICE } = req.body;
        await pool.request()
            .input("pid", id)
            .input("pname", PNAME)
            .input("price", PRICE)
            .execute("addProduct")
        return res.status(200).json({ message: "Product added successfully" });
    } catch (error) {
        res.status(500).json("Something went wrong" + error);
    }
}

export const getProducts = async (req: Request, res: Response) => {
    try {
        //make a connection to the server
        const pool = await mssql.connect(sqlConfig)
        
        //request data 
        const products = (await pool.request().execute("getProducts")).recordset as Product[]
        return res.status(200).json(products);
    } catch (error) {
        res.status(500).json("Something went wrong" + error);
    }
}




