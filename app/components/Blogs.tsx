import { getSortedBlogs } from "@/lib/blogs"
import BlogItem from "./BlogItem";

const Blogs = () => {
    const blogs = getSortedBlogs();
    return (
        <section className="mt-6">
            <h1 className="text-4xl font-semibold mb-5">Blogs</h1>
            <ul className="w-full">
                {blogs.map(blogData =>
                    <BlogItem key={blogData.slug} blog={blogData} />
                )}
            </ul>
           
        </section>
    )
}

export default Blogs