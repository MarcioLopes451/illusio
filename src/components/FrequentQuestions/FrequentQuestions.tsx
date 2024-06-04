import FrequentQuestionImg from "../../images/3D Architecture Render of Hologram Tent (3).jpeg";
import FrequentQuestionsList from "./FrequentQuestionsList";

export default function FrequentQuestions() {
  return (
    <div className="mt-10">
      <div className="flex items-center">
        <hr className="flex-grow h-[1px] bg-gray-100 border-0 rounded" />
        <h2 className="font-BankGothic text-[20px] whitespace-nowrap ml-4">
          Frequent Questions
        </h2>
      </div>
      <div className="mt-10 flex justify-center items-center gap-5 flex-col">
        <img src={FrequentQuestionImg} />
        <FrequentQuestionsList />
      </div>
    </div>
  );
}
