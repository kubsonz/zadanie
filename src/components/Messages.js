import axios from 'axios';

const Messages = async () => {
    const { data } = await axios.get('https://my-json-server.typicode.com/TomaszJaworski/test-api/news');

    const template = `
    <p class="heading">Wiadomości</p>
    <div class="message__container">
        ${data.map(({ image, text, title }) => {
        return (`
            <div class="message">
                <div class="message__top">
                    <img class="message__image" src=${image} alt="image"/>
                    <p class="message__title">${title}</p>
                </div>
                <p class="message__text">${text}</p>
            </div>
        `)
    }).join('')}
    </div>
    `;

    return template;
};

export default Messages;
