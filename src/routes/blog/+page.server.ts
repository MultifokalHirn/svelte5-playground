import { blog } from '$lib/data/blog'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => {
	return { blog }
}
