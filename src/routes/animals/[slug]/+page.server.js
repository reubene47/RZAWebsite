import { db } from '$lib/server/db';
import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {

    const [rows] = await db.query(
        'SELECT * FROM animals WHERE LOWER(slug) = LOWER(?)',
        [params.slug]
    );

    if (rows.length === 0) {
        throw redirect(302, '/animals/animal-not-found');
        // throw error(404, 'Animal not found');
    }

    return {
        animal: rows[0]
    };
}