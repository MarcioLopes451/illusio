import { useState } from "react";
import HeaderSection from "../../components/Header/HeaderSection";
import { PostData } from "../../data/PostData";

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
            <div key={p.id} className="border border-white rounded-[4px]">
              <img src={p.img} className="w-[317px] h-[259px] object-cover" />
              <div className="flex justify-between items-center mt-3 px-1">
                <p>{p.date}</p>
                <p>{p.Author}</p>
              </div>
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p>
                {p.firstParagraph.slice(
                  0,
                  p.firstParagraph.indexOf(
                    ".",
                    p.firstParagraph.indexOf(".") * 7
                  )
                )}
              </p>
              {/* Add more post details as needed */}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}