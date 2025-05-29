import { Request, Response } from "express";
import { Responder } from "../middleware/Responder";
import { Pool } from "../middleware/Pool";

export class ProductActor {
    static async createProduct(req: Request, res: Response) {
        try {
            const { title, price, description } = req.body;
            const product = await Pool.conn.product.create({
                data: {
                    title,
                    price,
                    description
                }
            });
            res.json(Responder.ok(product));
        } catch (e) {
            console.log(e);
            res.json(Responder.internal());
        }
    }

    static async createProductFeature(req: Request, res: Response) {}
    static async createProductFilter(req: Request, res: Response) {}
    static async createProductFilterItem(req: Request, res: Response) {
        try {
            const { filter_id, title } = req.body;

            const item = await Pool.conn.productFilterItem.create({
                data: {
                    filter_id,
                    title,
                },
            });
    
            res.json(Responder.ok(item));
        } catch (e) {
            console.error(e);
            res.json(Responder.internal());
        }
    }
    
    
    static async createProductImage(req: Request, res: Response) {}
    static async createProductType(req: Request, res: Response) {}

    static async findProduct(req: Request, res: Response) {
        try {
            const { title, filter_items, order, filter, offset, limit } = req.body;

            const where: any = {};

            if (title) {
                where.title = {
                    contains: title,
                };
            }

            if (filter_items && Array.isArray(filter_items) && filter_items.length > 0) {
                where.type = {
                    some: {
                        filters: {
                            some: {
                                items: {
                                    some: {
                                        id: {
                                            in: filter_items
                                        }
                                    }
                                }
                            }
                        }
                    }
                };
            }

            const orderBy: any = {};
            if (filter) {
                orderBy[filter === "date" ? "created_at" : filter] = order || "asc";
            } else {
                orderBy.title = order || "asc"; 
            }

            const skip = offset ? Number(offset) : undefined;
            const take = limit ? Number(limit) : undefined;

            const filteredProducts = await Pool.conn.product.findMany({
                where,
                orderBy,
                skip,
                take,
                include: {
                    type: {
                        include: {
                            filters: {
                                include: {
                                    items: true
                                }
                            }
                        }
                    }
                }
            });

            res.json(Responder.ok(filteredProducts));
        } catch (e) {
            console.log(e);
            res.json(Responder.internal());
        }
    }
}