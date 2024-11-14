import { blog } from '$lib/data/blog';
import type { PageServerLoad } from '../$types';
let user;

export const load: PageServerLoad = () => {
	user = 'John Doe';

	return { user, blog };
};

// export const actions = {
// 	default: async ({ request }) => {}
// } satisfies Actions;
