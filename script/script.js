document.addEventListener('DOMContentLoaded',function(){

    const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    const diasTabela = document.getElementById('nmr-dias');
    
    
    function GetDiasCalendario(mes,ano){
        document.getElementById('mes').innerHTML = meses[mes];
        document.getElementById('ano').innerHTML = ano;
        
        
        let primeiroDiadoMes = new Date(ano,mes,1).getDay()-1;
        let getultimoDiadoMes = new Date(ano,mes+1,0).getDate();
        
        
        for(var i = -primeiroDiadoMes, index = 0 ; i < (42-primeiroDiadoMes) ; i++, index++){
            let dt = new Date(ano,mes,i);
            let dtNow = new Date();
            let tabeladedias = diasTabela.getElementsByTagName('td')[index];
            tabeladedias.classList.remove('mes-anterior');
            tabeladedias.classList.remove('mes-quevem');
            tabeladedias.classList.remove('dia-atual');
            tabeladedias.innerHTML = dt.getDate();
            

            if(dt.getFullYear() == dtNow.getFullYear() && dt.getMonth() == dtNow.getMonth() && dt.getDate() == dtNow.getDate()){
                tabeladedias.classList.add('dia-atual');
            }
            if(i < 1){
                tabeladedias.classList.add('mes-anterior');
            }
            if( i > getultimoDiadoMes){
                tabeladedias.classList.add('mes-quevem');
            }
        }
    }

    let now = new Date();
    let month = now.getMonth();
    let year = now.getFullYear();
    GetDiasCalendario(month,year);
    
    const botao_proximo = document.getElementById('btn-prox');
    const botao_anterior = document.getElementById('btn-ant');
    
    botao_proximo.onclick = function(){
        month++;
        if(month > 11){
            month = 0;
            year++;
        }
        GetDiasCalendario(month,year);
    }
    botao_anterior.onclick = function(){
        month--;
        if(month < 0){
            month = 11;
            year--;
        }
        GetDiasCalendario(month,year);
    }
    
    
    horarios = document.getElementsByClassName("horarios");
    var btn_on = document.querySelectorAll('.dia');
    for(i = 0 ; i < btn_on.length ; i++){
        btn_on[i].addEventListener("click", function(){
            alert("TESTE");
        })
    }
})

