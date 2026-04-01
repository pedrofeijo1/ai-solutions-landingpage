import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0/dist/web.js'

const typebotId = "my-typebot-ii4dib1";

// Inicializa a bolha invisível para permitir o transbordo via script
Typebot.initBubble({
    typebot: typebotId,
    theme: {
        button: { backgroundColor: "rgb(255 45 32 / 0.3)" },
        chatWindow: { backgroundColor: "#1D1D1D" },
    },
});

window.openTypebot = (metadata = {}) => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = {
        utm_source: urlParams.get('utm_source') || 'direct',
        utm_medium: urlParams.get('utm_medium') || 'none',
        utm_campaign: urlParams.get('utm_campaign') || 'none',
        utm_content: urlParams.get('utm_content') || 'none',
        utm_term: urlParams.get('utm_term') || 'none',
        pagina_origem: metadata.pagina_origem || 'Home',
        services: metadata.plano_interesse || 'Geral'
    };

    // Atualiza as variáveis e abre o chat
    Typebot.open({
        prefilledVariables: utmParams
    });
};
