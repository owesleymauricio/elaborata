
$(document).ready(function () {
    $.getJSON("http://localhost:3000/clientes", function (data) {


        let backend = (location.hostname != 'localhost')?
        'https://backend-cadastro-qvtt.onrender.com':
        'http://localhost:3000';

        console.log(data);

        data.forEach((item) => {



            let html = `
            <tr>
                <th>${item.id}</th>
                <td>${item.nome}</td>
                <td>${item.email}</td>
                <td>${item.cidade}</td>
                <td>${item.telefone}</td>
                <td>${item.idade}</td>
                <td><button codigo=${item.id} class="bt-del btn btn-outline-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                     <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                     </svg></button></td>
            </tr>
        `;
        


            $('#lista').append(html);
        });
    });



    $('#bt-salvar').click(() => {
        let nome = $("#nome").val();
        let email = $("#email").val();
        let cidade = $("#cidade").val();
        let telefone = $("#telefone").val();
        let idade = $("#idade").val();

        let temErro = false;

        $("input").removeClass("is-invalid")

        if(nome.trim() == ''){
            $("#nome").addClass("is-invalid");
            temErro = true
        }
        if(email.trim() == ''){
            $("#email").addClass("is-invalid");
            temErro = true
        }

        if(!temErro){

            let data = {
                nome,
                email,
                cidade,
                telefone,
                idade
            }


            $.post("http://localhost:3000/cliente-novo", data , (retorno)=>{
                
                if (retorno == true)
                    {
                        $("#form-cadastro").modal("hide");
                        
                        let html = '<tr>'
                            +'<td></td>'
                            +'<td>'+ dados.nome +'</td>'
                            +'<td>'+ dados.email +'</td>'
                            +'<td>'+ dados.telefone +'</td>'
                            +'<td>'+ dados.cidade +'</td>'
                            +'<td>'+ dados.idade +'</td>'
                            +'</tr>';
    
                        $("#lista").append(html);
    
                        $("#toast-add").toast('show');
    
                        $("input").val("");
                    }
            })
        }
    });


    $('#lista').on('click', '.bt-del', function(){

        let id = $(this).attr('codigo')
        console.log(id)
        let dados = {id}
        $.post("http://localhost:3000/clientes/delete", dados, function(retorno){
            console.log(retorno)
        })
        //$.getJSON(backend + "/clientes", dados, function(dados){})
    })
});