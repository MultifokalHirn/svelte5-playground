import { getBlog, getTags } from '../blog'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => {
	const blog = getBlog()
	const tags = getTags(blog)
	return { tags, blog }
}
