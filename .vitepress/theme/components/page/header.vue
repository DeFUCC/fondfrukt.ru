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
			.p-4.flex.flex-wrap.gap-2
				.p-2.flex.justify-center(style="flex: 1 1 120px" v-if="page?.icon")
					img.max-h-30vh.rounded-3xl(:src="page.icon")
				h1.w-full.text-xl.font-bold.mb-2 {{ page?.title }}
				.flex-auto.text-md(v-if="page?.subtitle") {{ page?.subtitle }}
				a.flex-auto.underline.text-xl(v-if="page?.url" :href="page?.url" target="_blank") {{ page?.url.replace(/^https?:\/\//, '') }}
		ul.flex.flex-col.px-4.w-full.overflow-scroll
			li(
				v-for="card in pages[route.path]"
				:key="card.path"
			)
				a.font-bold.flex.items-center.transition.relative.hover-bg-light-900.dark-hover-bg-dark-800.py-1.px-2.rounded(
					:href="card.path"
				) {{ card?.title }}
			.min-h-4 
			li(
				v-for="header in route.data.headers"
				:key="header.id"
			)
				a.flex.items-center.transition.relative.hover-bg-light-900.dark-hover-bg-dark-800.py-1.px-2.rounded(
					:href="`${header.link}`"
					@click="open = false"
					) 
					.ml-1.z-2 {{ header.title }}

</template>