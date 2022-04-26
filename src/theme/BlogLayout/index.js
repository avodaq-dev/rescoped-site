
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';
import BlogComp from '@site/src/components/BlogComp';


export default function BlogLayout(props) {
  const {sidebar, toc, children, ...layoutProps} = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;
  return (
    <Layout {...layoutProps}>
        <BlogComp sidebar={props.sidebar} toc={props.toc} children={props.children}></BlogComp>
    </Layout>
  );
}
