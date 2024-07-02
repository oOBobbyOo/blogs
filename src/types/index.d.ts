import type { RouteMeta, RouteRecordNormalized } from 'vue-router'

type RouteMetaProps = RouteMeta & {
  frontmatter?: any
}

export interface RouterRecordProps extends RouteRecordNormalized {
  meta: RouteMetaProps
}

export interface Post {
  path: string
  title: string
  place?: string
  date: string
  lang?: string
  desc?: string
  platform?: string
  duration?: string
  recording?: string
  radio?: boolean
  video?: boolean
  inperson?: boolean
  redirect?: string
}

export interface Nav {
  name: string
  link: string
  desc: string
  icon?: string
}
