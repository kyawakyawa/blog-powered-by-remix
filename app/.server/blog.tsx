import { bundleMDX } from "mdx-bundler";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({ log: ['query'] })

export const bundleBlogPost = async () => {

  const post = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
    },
    where: {
      id: 3
    },
  })
  // TODO: error handle
  const mdxSource = post[0].content;
  prisma.$disconnect();

  const bundled = await bundleMDX({
    source: mdxSource,
  });

  return bundled;
}
