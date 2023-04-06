import { getBlogData, getSortedBlogs } from "@/lib/blogs"
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import { notFound } from "next/navigation"

export function generateStaticParams() {
  const blogs = getSortedBlogs();
  return blogs.map(blog => (
    {
      slug: blog.slug
    }
  ))
}

export const metadata = {
  title: `DevBlog | ${""}`,
  description: 'DevBlog: created by Developer, for the developers',
}



export default async function Blog({ params }: { params: { slug: string } }) {
  const blogs = getSortedBlogs();
  const { slug } = params;
  if (!blogs.find(blog => blog.slug === slug)) {
    return notFound();
  }
  const { title, date, contentHtml } = await getBlogData(slug);

  const formattedDate = getFormattedDate(date);

  return (
    <main className="prose prose-xl px-6 prose-slate dark:prose-invert mx-auto" >
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{formattedDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href='/'>&lt;- Back to Home </Link>
        </p>
      </article>
    </main>
  )
}

