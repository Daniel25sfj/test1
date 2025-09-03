import Members from "./(pages)/members/page";
import SecondPage from "./(pages)/secondPage/page";
import MainPage from "./(pages)/mainPage/page";
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Members />
      <SecondPage />
      <MainPage />
    </div>
  );
}
