import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate";

type Props = { blog: BlogPost }

const Blog = ({ blog }: Props) => {
    const { slug, title, date } = blog;
    const formattedDate = getFormattedDate(date);

    return (
        <li className="my-4 text-3xl dark:text-white/80 ">
            <Link className="underline hover:text-black/70 dark:hover:text-white" href={`blogs/${slug}`}>
                {title}
            </Link>
            <br />
            <p className="text-sm mt-1">{formattedDate}</p>
        </li>
    )
}

export default Blog