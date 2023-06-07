<script setup>
import { useData, useRoute, withBase } from 'vitepress'
import { data } from '../../../../pages.data.js'
import { usePage, usePages, cleanLink } from 'vitepress-pages'

const { site, frontmatter, theme } = useData();

const route = useRoute();

const { pages } = usePages(route, data)
const page = usePage(route, data)

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
				.p-2.flex.justify-center(style="flex: 1 1 120px" v-if="page?.frontmatter?.icon")
					img.max-h-30vh.rounded-3xl(:src="page?.frontmatter.icon")
				h1.w-full.text-xl.font-bold.mb-2 {{ frontmatter?.title }}
				.flex-auto.text-md(v-if="frontmatter?.description") {{ frontmatter?.description }}
				a.flex-auto.underline.text-xl(v-if="frontmatter?.url" :href="frontmatter?.url" target="_blank") {{ page.frontmatter?.url.replace(/^https?:\/\//, '') }}
		ul.flex.flex-col.ml-2.w-full.overflow-scroll(
			v-if="pages?.[cleanLink(route.path)]?.length>0"
			)
			li(
				v-for="card in pages[cleanLink(route.path)]"
				:key="card.url"
			)
				a.font-bold.flex.items-center.transition.relative.hover-bg-light-900.dark-hover-bg-dark-800.py-1.px-2.rounded(
					:href="card.url"
				) {{ card.frontmatter?.title }}
		ul.flex.flex-col.ml-2.w-full.overflow-scroll.border-l-1.mt-2(
			v-if="route?.data?.headers?.length>0"
			)
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