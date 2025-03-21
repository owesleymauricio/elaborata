$(document).ready(function () {
    $.getJSON("http://localhost:3000/clientes", function (data) {
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
                console.log(retorno)
            })
        }
    });


});