import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ArticleData = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
  published: boolean;
  size: string;
  content: string;
};

export function getArticle(fileName: string): ArticleData {
  const articlesDirectory = path.join(process.cwd(), "src/content/articles");
  const fullPath = path.join(articlesDirectory, `${fileName}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const fileSize = fs.statSync(fullPath).size;
  const formattedFileSize = `${(fileSize / 1000).toFixed(1)}K`;
  const { data, content } = matter(fileContents);

  return {
    title: data.title,
    description: data.description,
    date: data.date,
    tags: data.tags,
    slug: data.slug,
    published: data.published,
    size: formattedFileSize,
    content,
  };
}
