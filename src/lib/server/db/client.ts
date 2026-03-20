import {neon} from "@neondatabase/serverless"
import {drizzle} from "drizzle-orm/neon-http"
import * as schema from "../../../components/schema"

const databaseURL = process.env.DATABASE_URL;

if(!databaseURL) {
    throw new Error("Database URL is required for API routes")
}

const sql = neon(databaseURL);

export const db = drizzle({client:sql, schema:schema})