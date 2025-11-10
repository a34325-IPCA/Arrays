let notas = [];
let disciplinas = [];


function adicionarNota() {
    const disciplina = document.getElementById('disciplina').value;
    const nota = parseInt(document.getElementById('nota').value);

    notas.push(nota);
    disciplinas.push(disciplina);

    document.getElementById('disciplina').value = '';
    document.getElementById('nota').value = '';

    //listar();
}

function listar() {
    const tbody = document.getElementById('notas-body');
    tbody.innerHTML = '';  // Limpar a tabela

    // Adicionar cada nota à tabela
    for (let i = 0; i < notas.length; i++) {
        const row = tbody.insertRow();
        
        const cellDisciplina = row.insertCell(0);
        const cellNota = row.insertCell(1);
        const cellAcoes = row.insertCell(2);
        
        cellDisciplina.textContent = disciplinas[i];
        cellNota.textContent = notas[i].toFixed(1);
        
        // Criar botão de deletar
        const btnDeletar = document.createElement('button');
        btnDeletar.textContent = '🗑️ Deletar';
        btnDeletar.onclick = () => {
            disciplinas.splice(i, 1);
            notas.splice(i, 1);
            listar();
        };
        cellAcoes.append(btnDeletar);
    }
    media();
}
function media() {

    if (notas.length === 0) {
        document.getElementById("media").textContent = "-";
        return;
    }

    // Calcula a soma de todas as notas
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    // Calcula a média
    let media = soma / notas.length;
    
    // Mostra a média com uma casa decimal
    document.getElementById("media").textContent = media;
}
function removerDisciplina() {
    const disciplina = document.getElementById('disciplina').value;
    const index = disciplinas.indexOf(disciplina);
    if (index !== -1) {
        disciplinas.splice(index, 1);
        notas.splice(index, 1);
        listar();
    }
}