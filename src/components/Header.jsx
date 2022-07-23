import worldLogo from '../assets/world-icon.svg'
export const Header = () => {
  return (
    <header className="header-wrapper">
      <img src={worldLogo} alt="world icon"></img>
      <p className="header-title">my travel journal.</p>
    </header>    
  );
}