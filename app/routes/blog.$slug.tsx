
import * as React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { bundleBlogPost } from "./blog.server"
import { motion, useAnimation } from "framer-motion";
import { GoBackHome } from "../components/GoBackHome";

export async function loader() {
  const bundled = await bundleBlogPost();
  return json(bundled);
}

function Blog() {
  const { code, frontmatter } = useLoaderData<typeof loader>();
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  const controls = useAnimation();

  return (
    <>
      <main>
        <div className="markdown-body">
          <Component />
        </div>
        <GoBackHome controls={controls} />
      </main>
    </>
  );
}

export default Blog;
