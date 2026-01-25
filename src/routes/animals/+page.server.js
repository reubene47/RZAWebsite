import { db } from '$lib/server/db';

// Select everything from animals table except the animal-not-found entry
export async function load() {
    const [rows] = await db.query('SELECT * FROM animals WHERE slug != ?', ['animal-not-found']);
    return {
        animals: rows
    };
}