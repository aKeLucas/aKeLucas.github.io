function getBonus(especie, arma, estrategia, treino, moral, lider, alimentacao, tecnologia, terreno, clima) {
    let bonus = 0;

    // ======================
    // BASE DAS ESPÉCIES
    // ======================
    const base = {
        "Homo sapiens": 90,
        "Neandertal": 100,
        "Homo erectus": 85,
        "Homo habilis": 70,
        "Denisovano": 95
    };

    bonus += base[especie] || 80;

    // ======================
    // ARMAS
    // ======================
    const armas = {
        "Nenhuma": 0,
        "Pedra": 10,
        "Clava": 18,
        "Lança": 25,
        "Machado de Pedra": 22,
        "Arco": 28
    };

    bonus += armas[arma] || 0;

    // ======================
    // ESTRATÉGIAS
    // ======================
    const estrategias = {
        "Ataque Frontal": 10,
        "Defesa": 15,
        "Emboscada": 25,
        "Guerrilha": 20,
        "Cerco": 18
    };

    bonus += estrategias[estrategia] || 0;

    // ======================
    // TREINAMENTO
    // ======================
    const treinos = {
        "Nenhum": 0,
        "Básico": 10,
        "Caçadores": 18,
        "Guerreiros": 25,
        "Veteranos": 35
    };

    bonus += treinos[treino] || 0;

    // ======================
    // MORAL
    // ======================
    const morais = {
        "Muito Baixa": -20,
        "Baixa": -10,
        "Normal": 0,
        "Alta": 15,
        "Extremamente Alta": 30
    };

    bonus += morais[moral] || 0;

    // ======================
    // LÍDER
    // ======================
    const lideres = {
        "Sem líder": -10,
        "Líder comum": 10,
        "Grande estrategista": 30
    };

    bonus += lideres[lider] || 0;

    // ======================
    // ALIMENTAÇÃO
    // ======================
    const comida = {
        "Famintos": -25,
        "Normal": 0,
        "Bem alimentados": 20
    };

    bonus += comida[alimentacao] || 0;

    // ======================
    // TECNOLOGIA
    // ======================
    const tech = {
        "Ferramentas simples": 5,
        "Ferramentas refinadas": 15,
        "Domínio do fogo": 25,
        "Armas avançadas": 40
    };

    bonus += tech[tecnologia] || 0;

    // ======================
    // TERRENO (geral)
    // ======================
    const terrenos = {
        "Planície": 10,
        "Floresta": 15,
        "Montanha": 20,
        "Caverna": 25,
        "Pântano": 5,
        "Neve": 18
    };

    bonus += terrenos[terreno] || 0;

    // ======================
    // CLIMA (geral)
    // ======================
    const climas = {
        "Sol": 10,
        "Chuva": -5,
        "Tempestade": -15,
        "Neblina": -10,
        "Neve": 5
    };

    bonus += climas[clima] || 0;

    return bonus;
}

function batalhar() {

    let especie1 = document.getElementById("especie1").value;
    let especie2 = document.getElementById("especie2").value;

    let qtd1 = parseInt(document.getElementById("qtd1").value);
    let qtd2 = parseInt(document.getElementById("qtd2").value);

    let arma1 = document.getElementById("arma1").value;
    let arma2 = document.getElementById("arma2").value;

    let estrategia1 = document.getElementById("estrategia1").value;
    let estrategia2 = document.getElementById("estrategia2").value;

    let treino1 = document.getElementById("treino1").value;
    let treino2 = document.getElementById("treino2").value;

    let moral1 = document.getElementById("moral1").value;
    let moral2 = document.getElementById("moral2").value;

    let lider1 = document.getElementById("lider1").value;
    let lider2 = document.getElementById("lider2").value;

    let alimentacao1 = document.getElementById("alimentacao1").value;
    let alimentacao2 = document.getElementById("alimentacao2").value;

    let tecnologia1 = document.getElementById("tecnologia1").value;
    let tecnologia2 = document.getElementById("tecnologia2").value;

    let terreno = document.getElementById("terreno").value;
    let clima = document.getElementById("clima").value;

    // ======================
    // CALCULO FINAL
    // ======================
    let poder1 = qtd1 * getBonus(
        especie1, arma1, estrategia1, treino1,
        moral1, lider1, alimentacao1, tecnologia1,
        terreno, clima
    );

    let poder2 = qtd2 * getBonus(
        especie2, arma2, estrategia2, treino2,
        moral2, lider2, alimentacao2, tecnologia2,
        terreno, clima
    );

    // RANDOMIZADOR LEVE (incerteza da batalha)
    poder1 *= (0.9 + Math.random() * 0.2);
    poder2 *= (0.9 + Math.random() * 0.2);

    let resultado = "";

    if (poder1 > poder2) {

        let diff = Math.round(poder1 - poder2);
        let sobreviventes = Math.max(1, Math.round(qtd1 * (diff / poder1)));

        resultado = `
        <h2>🏆 Vitória do Time 1 (${especie1})</h2>
        <p><b>Poder:</b> ${Math.round(poder1)} vs ${Math.round(poder2)}</p>
        <p><b>Sobreviventes:</b> ${sobreviventes} de ${qtd1}</p>
        `;
    } else {

        let diff = Math.round(poder2 - poder1);
        let sobreviventes = Math.max(1, Math.round(qtd2 * (diff / poder2)));

        resultado = `
        <h2>🏆 Vitória do Time 2 (${especie2})</h2>
        <p><b>Poder:</b> ${Math.round(poder2)} vs ${Math.round(poder1)}</p>
        <p><b>Sobreviventes:</b> ${sobreviventes} de ${qtd2}</p>
        `;
    }

    document.getElementById("resultado").innerHTML = resultado;
}