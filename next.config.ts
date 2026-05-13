import type { NextConfig } from "next";
import nextra from 'nextra'

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './mdx-components.tsx'
    }
  }
};

const withNextra = nextra({})


export default withNextra({
  ...nextConfig
});
