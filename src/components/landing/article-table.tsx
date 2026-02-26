'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Article } from '../../types/article';
import ArticlePreview from './preview';

const ArticleTable = ({ files }: { files: Article[] }) => {
  console.log(files)
  const router = useRouter();
  const [previewed, setPreviewed] = useState<Article>(files[0]);

  return (
    <div className="grid grid-cols-[1fr_auto] gap-6">
      <div className="overflow-x-auto border border-border rounded-lg bg-card p-4 min-h-[700px]">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="text-terminal-gray border-b border-muted">
              <th className="text-left pb-2 pr-4 font-normal">Mode</th>
              <th className="text-left pb-2 pr-4 font-normal">Links</th>
              <th className="text-left pb-2 pr-4 font-normal">User:Group</th>
              <th className="text-left pb-2 pr-4 font-normal">Size</th>
              <th className="text-left pb-2 pr-4 font-normal">Date</th>
              <th className="text-left pb-2 font-normal">Name</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, idx) => (
              <tr
                key={idx}
                onClick={() => router.push(`/article/${file.slug}`)}
                onMouseEnter={() => setPreviewed(file)}
                className="border-b border-muted last:border-0 hover:bg-muted transition-colors cursor-pointer"
              >
                <td className="py-2 pr-4 text-catppuccin-mauve">-rw-r--r--</td>
                <td className="py-2 pr-4 text-catppuccin-yellow">1</td>
                <td className="py-2 pr-4">
                  <div className="flex flex-col leading-tight">
                    <span className="text-catppuccin-blue">coronado@blog</span>
                  </div>
                </td>
                <td className="py-2 pr-4 text-catppuccin-peach">{file.size}</td>
                <td className="py-2 pr-4">
                  <div className="flex flex-col leading-tight">
                    <span className="text-catppuccin-green">{file.date}</span>
                  </div>
                </td>
                <td className={"py-2"}>
                  {file.slug}.md
                  <span className={`ml-2 text-xs text-catppuccin-red border border-catppuccin-red px-1.5 py-0.5 rounded ${file.slug === previewed.slug ? 'visible' : 'invisible'}`}>
                    ACTIVE
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ArticlePreview
        date={previewed.date}
        content={previewed.content}
        tags={previewed.tags}
        title={previewed.title}
      />
    </div>
  );
};

export default ArticleTable;
