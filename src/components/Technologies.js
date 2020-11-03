import webpackLogo from '../assets/webpackLogo.svg'
import javascriptLogo from '../assets/javascriptLogo.svg'
import npmLogo from '../assets/npmLogo.svg'
import htmlLogo from '../assets/htmlLogo.svg'

const Technologies = () => {
    const logosArray = [
        {
            logo: webpackLogo,
            title: 'Webpack'
        },
        {
            logo: javascriptLogo,
            title: 'JavaScript'
        },
        {
            logo: npmLogo,
            title: 'Node package Manager'
        },
        {
            logo: htmlLogo,
            title: 'HTML'
        }
    ];

    const template = `
        <div class="technology__container">
            <p class="heading">Nasze Technologie</p>
            ${logosArray.map(({ logo, title }) => {
        return (`
                        <div class="technology">
                            ${logo}
                            <p class="technology__title">${title}</p>
                        </div>
                `)
    }).join('')}
        </div>

    `;

    return template;
};

export default Technologies;
