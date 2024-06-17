import axios from "axios";
import fm from "front-matter";

const GITHUB_REPO = "MarcioLopes451/illusio";
const GITHUB_BRANCH = "main";

type Post = {
  id: number;
  title: string;
  date: string;
  author: string;
  image: string;
  firstParagraph: string;
  quote: string;
  secondParagraph: string;
  tags: string[];
  slug: string;
};

type Attributes = {
  title: string;
  date: string;
  author: string;
  image: string;
  firstParagraph: string;
  quote: string;
  secondParagraph: string;
  tags: string[];
};

export const fetchPosts = async (): Promise<Post[]> => {
  const posts: Post[] = [];
  try {
    const files = await axios.get(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/src/posts?ref=${GITHUB_BRANCH}`
    );

    let idCounter = 1;
    for (const file of files.data) {
      if (file.name.endsWith(".md")) {
        const fileContent = await axios.get(file.download_url);
        const content = fileContent.data;

        const parsedContent = fm<Attributes>(content);
        const attributes = parsedContent.attributes;

        posts.push({
          id: idCounter++,
          title: attributes.title || "",
          date: attributes.date || "",
          author: attributes.author || "",
          image: attributes.image || "",
          firstParagraph: attributes.firstParagraph || "",
          quote: attributes.quote || "",
          secondParagraph: attributes.secondParagraph || "",
          tags: attributes.tags || [],
          slug: file.name.split(".")[0],
        });
      }
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
  return posts;
};
