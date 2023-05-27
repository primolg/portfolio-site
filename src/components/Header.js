import radio from "./art.png"

function Header() {

  return(
    <div id="header">
      <div>
            <div id="name">primo ledeboer gill</div>
            <div id="titles">web developer & designer</div>
      </div>
      <img src={radio} />
    </div>
  );
}

export default Header;
