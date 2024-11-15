import type { PageServerLoad } from './$types'
import { getBlog, getTags } from './blog'

export const load: PageServerLoad = () => {
	const blog = getBlog()
	const tags = getTags(blog)
	return { blog, tags }
}
