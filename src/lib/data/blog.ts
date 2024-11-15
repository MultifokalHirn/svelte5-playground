import type { BlogPost } from '$lib/types/types'

export const blog: BlogPost[] = [
	{
		slug: '1',
		tags: ['lorem', 'ipsum'],
		date: new Date(),
		image: undefined,
		page: '../assets/posts/1.svelte',
		title: 'Lorem Ipsum',
		content: undefined
	},
	{
		slug: '2',
		tags: ['lorem', 'rhoncus'],
		date: new Date(),
		image: undefined,
		page: undefined,
		title: 'Duis Rhoncus',
		content:
			'Duis rhoncus, dolor vitae dapibus faucibus, orci lectus rutrum neque, sit amet semper nisl ligula vel nunc. Morbi ut enim condimentum nibh tristique molestie et ut neque. Etiam vehicula ut velit eu finibus. Nunc posuere urna et consequat imperdiet. Morbi lobortis feugiat nunc. Cras congue luctus nisi, ac lobortis elit blandit porta. Nunc et tristique velit. Nam in felis quis dolor pretium malesuada id sit amet elit. Vestibulum quis condimentum mi. Curabitur at magna et risus ultricies commodo. Nullam est quam, aliquam ut augue non, porta mollis tortor. Quisque faucibus aliquet nisl ac elementum. Quisque id dui et diam laoreet congue. Mauris vel felis eros. Nullam blandit non dui et mattis. Ut tristique ligula molestie lectus fringilla, in placerat libero blandit. Duis viverra ipsum felis, id fringilla arcu vehicula vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin imperdiet sem vel odio auctor, nec imperdiet arcu luctus. Praesent sit amet nisl et libero volutpat ornare. Sed bibendum ac lectus ut suscipit. Praesent et diam purus.Vivamus risus nisl, lacinia vitae magna eget, consequat porttitor massa. Curabitur quis vulputate mauris, at egestas libero. Sed pellentesque venenatis ipsum vehicula euismod. Nullam vehicula erat eu eros rutrum interdum. Pellentesque vel tellus vehicula, fermentum mi pretium, tincidunt purus. Vivamus maximus mauris libero, nec venenatis nibh suscipit nec. Fusce molestie nunc non arcu eleifend pellentesque. Maecenas luctus, dolor sit amet iaculis tincidunt, nunc elit lobortis velit, sed lobortis lectus mauris a elit. Suspendisse a ullamcorper elit, ut tempus mauris. Suspendisse potenti. Duis vitae velit massa.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec id ante feugiat, vehicula metus ut, malesuada risus. Proin venenatis porttitor malesuada. Aenean magna nulla, porttitor nec tortor interdum, convallis mollis urna. Nulla facilisi. Suspendisse et dolor sed nisl interdum tempor. Vestibulum consectetur, magna sit amet iaculis viverra, felis magna finibus nisi, nec mattis nisi leo a augue. Sed justo metus, sagittis sit amet neque eu, semper finibus sem. Etiam accumsan viverra dignissim. Quisque porta nibh id tempor dapibus. Ut ultricies ligula turpis, a feugiat lorem pellentesque at.Sed vestibulum, nisi at gravida gravida, erat velit suscipit risus, id hendrerit lectus justo et tortor. Nam efficitur facilisis nibh sed mollis. Ut imperdiet erat in arcu egestas, at tristique quam porta. Mauris eget lacus neque. Curabitur lobortis velit nunc, gravida sodales sem finibus sit amet. Aliquam erat volutpat. Cras dignissim purus neque, vel fringilla nunc commodo ut. Morbi aliquet nisi ex, vitae ornare dui blandit at.'
	}
]
