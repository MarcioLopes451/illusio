import Header from "../../images/AdobeStock_543034790 1.png";

type HeaderProps = {
  title: string;
};

export default function HeaderSection({ title }: HeaderProps) {
  return (
    <div
      className="w-full h-[215px] bg-cover bg-center"
      style={{ backgroundImage: `url(${Header})` }}
    >
      <div className="flex justify-center items-center">
        <p className="font-BankGothic text-white text-2xl font-bold mt-20">
          {title}
        </p>
      </div>
    </div>
  );
}
