export interface BlogPost {
	slug: string
	title: string
	content: string | undefined

	page: string | undefined //import('svelte').Snippet | undefined
	tags: string[] | undefined
	date: Date | undefined
	image: string | undefined
}

export interface Tag {
	name: string
	posts: BlogPost[]
}

export interface Tags {
	[key: string]: Tag
}
