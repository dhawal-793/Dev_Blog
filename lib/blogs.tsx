import fs from 'fs';
import matter from 'gray-matter'
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

const blogsDirectory = path.join(process.cwd(), 'blogs')

export function getSortedBlogs() {
    const fileNames = fs.readdirSync(blogsDirectory);
    const blogs = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(blogsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf-8')
        const result = matter(fileContents);

        const blogPost: BlogPost = {
            slug,
            title: result.data.title,
            date: result.data.date,
        }
        return blogPost
    })
    return blogs.sort((a, b) => a.date < b.date ? 1 : -1)
}



export async function getBlogData(slug: string) {
    const fullPath = path.join(blogsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const result = matter(fileContents);

    const processedContent = await remark().use(html).process(result.content)
    const contentHtml = processedContent.toString();

    const blogData: BlogPost & { contentHtml: string } = {
        slug,
        title: result.data.title,
        date: result.data.date,
        contentHtml
    }
    return blogData;

}