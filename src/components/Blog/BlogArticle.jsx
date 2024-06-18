import { BuilderComponent, builder } from "@builder.io/react";
import React, { useState, useEffect } from "react";

// TO DO: replace with your own Public API Key
builder.init("70deb04ccc93405cb42d8de77379da1b");

function BlogArticle({ match }) {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    builder
      .get("blog-article", {
        // Include references, like our `author` ref
        options: { includeRefs: true },
        query: {
          // Get the specific article by handle
          "data.handle": "",
        },
      })
      .toPromise()
      .then((blogArticle) => setArticle(blogArticle));
  }, []);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>{article.data.title}</div>
      <div>{article.data.blurb}</div>
      <img src={article.data.image} />
      <BuilderComponent
        name="blog-article"
        content={article}
        options={{ includeRefs: true }}
      />
    </>
  );
}

export default BlogArticle;
/*
import { useEffect, useState } from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import FourOhFour from "./FourOhFour";

// Put your API key here
builder.init("70deb04ccc93405cb42d8de77379da1b");

// set whether you're using the Visual Editor,
// whether there are changes,
// and render the content if found
export default function Sample() {
  const isPreviewingInBuilder = useIsPreviewing();
  const [notFound, setNotFound] = useState(false);
  const [content, setContent] = useState(null);

  // get the page content from Builder
  useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get("page", {
          url: window.location.pathname,
        })
        .promise();

      setContent(content);
      setNotFound(!content);

      // if the page title is found,
      // set the document title
      if (content?.data.title) {
        document.title = content.data.title;
      }
    }
    fetchContent();
  }, [window.location.pathname]);

  // If no page is found, return
  // a 404 page from your code.
  // The following hypothetical
  // <FourOhFour> is placeholder.
  if (notFound && !isPreviewingInBuilder) {
    return <FourOhFour />;
  }

  // return the page when found
  return (
    <section id="blog">
      <div className="container contact_container">
      
        <p>Hi Blogger</p>
         <BuilderComponent model="page" content={content} />
      </div>
    </section>
  );
}
*/
