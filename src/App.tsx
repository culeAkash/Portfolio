import Navbar from "./components/navbar";
import "./App.css";

const App = () => {
  //Cursor Background Tracking
  const tokenBgCursor = document.querySelector(".blob-cursor__bg");
  const triggerCursor = document.querySelector(".show-cursor__bg");
  document.addEventListener("mousemove", (e) => {
    tokenBgCursor?.setAttribute(
      "style",
      "top: " + (e.pageY - 320) + "px; left: " + (e.pageX - 320) + "px;"
    );
  });

  const cursorBg = document.querySelector(".blob-cursor__bg");

  triggerCursor?.addEventListener("mouseenter", () => {
    cursorBg?.classList.remove("hide");
  });
  triggerCursor?.addEventListener("mouseleave", () => {
    cursorBg?.classList.add("hide");
  });
  return (
    <div className="h-[100vh]">
      <div className="sticky top-0 z-50 shadow-lg ">
        <Navbar />
      </div>
      <div className="blob-cursor__bg"></div>
      <div className={`max-h-fit bg-[#10162B] show-cursor__bg`}>
        <h1 className="text-3xl font-bold text-center min-h-screen text-zinc-100">
          Hello
        </h1>
        <a href="https://github.com/culeAkash" className="z-50">
          Github
        </a>
      </div>
    </div>
  );
};

export default App;
