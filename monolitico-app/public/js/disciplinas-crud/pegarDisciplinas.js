 function pegarDisciplina() {
            url = "https://reimagined-space-system-x5qjr54vg4xf979r-3001.app.github.dev/" // se mudar a porta, tem que mudar a URL
            fetch(url)
                .then((res) => {
                    return res.json()
                })
                .then((disciplina) => {
                    console.log('listando', disciplina)
                    dados = document.querySelector("tbody")

















                    dados.innerHTML = ""

                    for (let i = 0; i < disciplina.length; i++) {
                        dados.innerHTML += `<tr>
                                                <td>${disciplina[i].id}</td>
                                                <td>${disciplina[i].nome}</td>
                                                <td>${disciplina[i].curso}</td>
                                                <td>${disciplina[i].turno}</td>
                                                <td>
                                                    <button onclick="editarDisciplina(${disciplina[i].id})">Editar</button>
                                                    <button onclick="excluirDisciplina(${disciplina[i].id})">Excluir</button>
                                                </td>
                                            </tr>`
                    }

                })
        }

         pegarDisciplina()