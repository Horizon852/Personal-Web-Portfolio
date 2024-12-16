import React from "react";
import "./Navigation.css";

const Navigation = () => {
  // const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  // // อัปเดตธีมเมื่อผู้ใช้เปลี่ยน
  // useEffect(() => {
  //   document.documentElement.setAttribute("data-theme", theme);
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  // // ฟังก์ชันสำหรับเปลี่ยนธีม
  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  // };




  return (
    <nav className="navbar">
      {/* โลโก้ */}
      <a href="#home" className="logo">
        punwenin
      </a>
      
      {/* ลิงก์ต่าง ๆ */}
      <ul className="navLinks">
        <li>
          <a href="#home" className="link">Home</a>
        </li>
        <li>
          <a href="#about" className="link">About</a>
        </li>
        <li>
          <a href="#education" className="link">Education</a>
        </li>
        <li>
          <a href="#projects" className="link">Projects</a>
        </li>
        <li>
          <a href="#contact" className="link">Contact</a>
        </li>
        <li>
          {/* ลิงก์ไปยัง Google Drive */}
          <a
            href="https://drive.google.com/file/d/1HPLglDqKrqN_ATeFJFdrFg5d4iM9-_wk/view?usp=sharing"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>

     
    </nav>
  );

};

export default Navigation;
