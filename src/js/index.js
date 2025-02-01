const atualizarBotaoAdvice = document.querySelector(".advice-update");
const numeroAdvice = document.querySelector(".advice-id");
const descricaoAdvice = document.querySelector(".advice-description");

async function gerarConselho() {
    try {
        const resposta = await fetch("https://api.adviceslip.com/advice");
        
        if(!resposta.ok) {
            throw new Error("Erro ao buscar conselho");
        }

        const conteudoAdvice = await resposta.json();
        const idAdvice = `Advice #${conteudoAdvice.slip.id}`;
        const textoAdvice = `${conteudoAdvice.slip.advice}`;

        numeroAdvice.innerText = idAdvice;
        descricaoAdvice.innerText = textoAdvice;

    } catch (error) {
        console.error("Erro ao buscar informações da API", error);
    }
}

atualizarBotaoAdvice.addEventListener("click", gerarConselho);

gerarConselho();