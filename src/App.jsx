import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Signup from "./components/Signup";
import ContactForm from "./components/ContactForm";
import ContactUsForm from "./components/ContactUs";

function App() {
  const [activeTab, setActiveTab] = useState("bio");
  const [darkMode, setDarkMode] = useState(undefined);
  const [theme, setTheme] = useState(undefined);

  const onGetStarted = () => {
    console.log("get started");
  };

  const onLearnMore = () => {
    console.log("learn more");
  };

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    const theme = darkMode ? "dark" : "light";
    localStorage.setItem("theme", theme);
  };

  return (
    <main className="bg-white min-h-screen px-5 py-5 text-black">
      <Button title="Get started" onClick={onGetStarted} />
      <Button title="Learn more" onClick={onLearnMore} />
      <section className="flex gap-3 border-b  border-red-500 w-max">
        {tabs.map((tab) => (
          <button
            key={tab.slug}
            className={`text-red-500 active:border-0 px-5 pb-3 cursor-pointer ${
              activeTab === tab.slug ? "border-b-4" : ""
            }`}
            onClick={() => handleTabSelect(tab.slug)}
          >
            {tab.name}
          </button>
        ))}
      </section>

      <section className="text-black mb-10">{activeTab}</section>

      <ContactUsForm />
    </main>
  );
}

export default App;

const tabs = [
  { name: "Bio", slug: "bio" },
  { name: "Story", slug: "story" },
  { name: "Post", slug: "post" },
];
const themeMap = {
  dark: true,
  light: false,
};
