type SiteConfig = {
  name: string
  description: string
  url: string
  // ogImage: string
  links: {
    // twitter: string
    github: string
  }
}
export const siteConfig: SiteConfig = {
  name: "Dev Blog",
  description:
    "Blog Application built using NextJs, Contentlayer, shadcn-ui, tailwindcss and MDX",
  url: "https://dev-folio-793.vercel.app",
  // ogImage: "https://tx.shadcn.com/og.jpg",
  links: {
    // twitter: "https://twitter.com/shadcn",
    github: "https://github.com/dhawal-793/Dev_Blog",
  },
}
