<script setup>
import { useData, useRoute, withBase } from 'vitepress'
import routes from '~pages'
import { getPage, getPages } from 'vitepress-pages/browser'

const { site, frontmatter, theme } = useData();

const route = useRoute();

const page = computed(() => getPage(route.path, routes))
const pages = getPages(routes)

</script>

<template lang='pug'>
header.bg-light-200.bg-opacity-90.dark-bg-dark-200.dark-bg-opacity-90.md-max-w-100(
	style="flex: 1 1 300px"
	)
	.sticky.top-0.flex.flex-col.items-start.max-h-100vh.mb-4
		a.no-underline.p-4(href="/")
			img.w-12rem(:src="theme.logo")
		nav-parents(:key="route.path")
		transition(name="fade" mode="out-in")
			.p-4.flex.flex-wrap
				h1.w-full.text-xl.font-bold.mb-2.p-4.bg-light-600.dark-bg-dark-500.shadow-lg {{ page?.title }}
				.p-2.flex.justify-center(style="flex: 1 1 120px" v-if="page?.icon")
					img.max-h-30vh.rounded-3xl(:src="page.icon")
				.p-4.flex-auto.font-bold(v-if="page?.subtitle")
					.text-md {{ page?.subtitle }}
				a.p-2.flex-auto.underline.text-xl(v-if="page?.url" :href="page?.url" target="-blank") {{ page?.url.replace(/^https?:\/\//, '') }}
		.flex.flex-col.px-8.gap-2.w-full.overflow-scroll
			a.font-bold.flex.items-center.transition.relative.before-content-DEFAULT.before-absolute.before-bg-light-700.before-w-full.before-h-2px.before-z-1.before-top-6.hover-before-bg-dark-50.before-transition.dark-before-bg-dark-50.dark-hover-before-bg-light-900.before-rounded-xl(
				v-for="card in pages[route.path]"
				:key="card.path"
				:href="card.path"
			) {{ card?.title }}
			.min-h-4 
			a.flex.items-center.transition.relative.before-content-DEFAULT.before-absolute.before-bg-light-700.before-w-full.before-h-2px.before-z-1.before-top-6.hover-before-bg-dark-50.before-transition.dark-before-bg-dark-50.dark-hover-before-bg-light-900.before-rounded-xl(
				@click="open = false"
				v-for="header in route.data.headers"
				:href="`${header.link}`"
				) 
				.ml-1.z-2 {{ header.title }}

</template>