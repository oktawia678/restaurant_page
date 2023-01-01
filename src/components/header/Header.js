import "./header.css";
export const Header = () => {
  return (
    <>
      <div className="container_menu">
        <a href="/">
          <div className="menu_logo">Logo</div>
        </a>
        <div className="menu_nav">
          <a href="/menu">
            <div>menu</div>
          </a>
          <a href="/reservation">
            <div>Rezerwacja</div>
          </a>
          <a href="/contact">
            <div>kontakt</div>
          </a>
        </div>
      </div>
    </>
  );
};
