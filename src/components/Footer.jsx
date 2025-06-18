const Footer = () => {
  return (
    <div className="footer">
      <p>
        © {new Date().getFullYear()}. Built with ♥ by{" "}
        <a href="https://github.com/amuuo-dev" target="blank">
          Anthony Musembi
        </a>
        . Feel free to use this template for your own purposes but please don't
        claim it as your own
      </p>
    </div>
  );
};

export default Footer;
