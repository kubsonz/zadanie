import welcomeSlider from '../assets/welcomeSlider.svg'

const Header = () => {
  const template = `
    <div class="welcome__container">
      ${welcomeSlider}
      <div class="welcome">
        <p class="heading">Dzień dobry</p>
        <button class="welcome__button welcome__button--login">Zaloguj się</button>
        <p class="welcome__or">lub</p>
        <button class="welcome__button welcome__button--register">Zarejestruj</button>
      </div>
    </div>
  `;

  return template;
};

export default Header;
