import { PrismaClient } from "@prisma/client";

export class Pool {
    static conn = new PrismaClient()
}