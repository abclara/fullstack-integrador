 function pegarAlunos() {
            url = "https://reimagined-space-system-x5qjr54vg4xf979r-3001.app.github.dev/cursos/" //se mudar a porta tem que mudar a URL
            fetch(url)
                .then((res) => {
                    return res.json()
                })
                .then((alunos) => {
                    console.log('listando', alunos)
                    dados = document.querySelector("tbody")

                    dados.innerHTML = ""

                    for (let i = 0; i < alunos.length; i++) {
                        dados.innerHTML += `<tr>
                                                <td>${alunos[i].id}</td>
                                                <td>${alunos[i].nome}</td>
                                                <td>${alunos[i].idade}</td>
                                                <td>${alunos[i].sexo}</td>
                                                <td>${alunos[i].matricula}</td>
                                                <td>
                                                    <button onclick="editarAluno(${alunos[i].id})">Editar</button>
                                                    <button onclick="excluirAluno(${alunos[i].id})">Excluir</button>
                                                </td>
                                            </tr>`
                    }

                })
        }
        pegarAlunos()