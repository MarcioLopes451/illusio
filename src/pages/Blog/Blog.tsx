import { useState } from "react";
import HeaderSection from "../../components/Header/HeaderSection";
import { PostData } from "../../data/PostData";
import { Link } from "react-router-dom";
import RightArrow from "../../images/4829869_arrow_next_right_icon.png";

export default function Blog() {
  const [post, setPost] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState(PostData);

  const searchPost = (query: string) => {
    if (query.trim() === "") {
      setFilteredPosts(PostData);
    } else {
      const filtered = PostData.filter((p) =>
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
      <section className="mt-10 px-[32px] font-Inter">
        <div className="flex justify-between items-center">
          <h2 className="font-BankGothic text-[20px]">Blog Section</h2>
          <hr className="w-[140px] h-[1px] bg-gray-100 border-0 rounded" />
        </div>
        <div className="mt-10 flex justify-center items-center flex-col">
          <input
            type="text"
            value={post}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded px-3 py-2 bg-transparent w-[280px]"
            placeholder="Search Here..."
          />
        </div>
        <div className="mt-10">
          {filteredPosts.map((p) => (
            <div key={p.id} className="border border-white rounded-[4px] pb-5">
              <img src={p.img} className="w-[317px] h-[259px] object-cover" />
              <div className="flex justify-between items-center mt-3 text-[13px] px-[15px]">
                <p>{p.date}</p>
                <p>{p.Author}</p>
              </div>
              <div className="flex justify-center items-center mt-3 px-[15px] flex-col pb-5 gap-5">
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
                to={`/illusio/blog/${p.id}`}
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
              {/* Add more post details as needed */}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
