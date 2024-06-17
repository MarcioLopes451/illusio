import { useEffect, useState } from "react";
import HeaderSection from "../../components/Header/HeaderSection";
import { Link } from "react-router-dom";
import RightArrow from "../../images/4829869_arrow_next_right_icon.png";
import { fetchPosts } from "../../utils/fetchPosts";

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

export default function Blog() {
  const [post, setPost] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
      setFilteredPosts(fetchedPosts);
    };

    getPosts();
  }, []);

  const searchPost = (query: string) => {
    if (query.trim() === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setPost(query);
    searchPost(query);
  };

  return (
    <>
      <HeaderSection title="Blog" />
      <section className="mt-10 px-[32px] font-Inter md:px-[50px]">
        <div className="flex items-center">
          <h2 className="font-BankGothic text-[20px] whitespace-nowrap mr-4">
            Blog Section
          </h2>
          <hr className="flex-grow h-[1px] bg-gray-100 border-0 rounded" />
        </div>
        <div className="mt-10 flex justify-center items-center flex-col">
          <input
            type="text"
            value={post}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded px-3 py-2 bg-transparent w-[280px] md:w-[520px]"
            placeholder="Search Here..."
          />
        </div>
        <div className="mt-10 flex justify-center items-center flex-col flex-wrap md:items-start">
          {filteredPosts.map((p) => (
            <div
              key={p.id}
              className="border border-white rounded-[4px] pb-5 md:w-[324px]"
            >
              <img src={p.image} className="w-full h-[259px] object-cover" />
              <div className="flex justify-between items-center mt-3 text-[13px] px-[15px]">
                <p>{new Date(p.date).toLocaleDateString()}</p>
                <p>{p.author}</p>
              </div>
              <div className="flex justify-center items-start mt-3 px-[15px] flex-col pb-5 gap-5">
                <h3 className="font-semibold text-[16px]">{p.title}</h3>
                <p className="text-[14px]">
                  {p.firstParagraph.slice(
                    0,
                    p.firstParagraph.indexOf(
                      ".",
                      p.firstParagraph.indexOf(".") * 7
                    )
                  )}
                </p>
              </div>
              <Link
                to={`/blog/${p.id}`}
                key={p.id}
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
              >
                <button className="flex justify-between items-center w-[166px] h-[40px] border border-white mx-[15px] p-[10px] rounded">
                  <p>Read More</p>
                  <img src={RightArrow} />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
