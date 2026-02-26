import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getArticle(fileName: string) {
  const articlesDirectory = path.join(
    process.cwd(),
    "src/content/articles"
  );

  const fullPath = path.join(articlesDirectory, `${fileName}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const fileSize = fs.statSync(fullPath).size;
  const formattedFileSize = `${(fileSize / 1000).toFixed(1)}K`;

  const { data, content } = matter(fileContents);

  return {
    size: formattedFileSize,
    ...data,
    content,
  };
}

