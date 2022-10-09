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
            var tabeladedias = diasTabela.getElementsByTagName('td')[index];
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
    
    // var clicardias = document.getElementsByName("td");
    // for(var i =0; i < clicardias.length; i++){
    //     // clicardias.classList.remove('selected');
    //     clicardias(i).onclick = ()=>{
    //         alert('TESE');
    //     }
    //     clicardias(i).addEventListener("click", ()=>{
    //         alert('TESTE');
    //     })

    //     // if(tabeladedias(i).onclick == true){
    //     //     tabeladedias(i).classList.add('selected');
    //     //     alert('TESTE');
    //     // }
    // }
    
    // console.log(clicardias);

    // var iddidas = [
    //     'dia1',
    //     'dia2',
    //     'dia3',
    //     'dia4',
    //     'dia5',
    //     'dia6',
    //     'dia7',
    //     'dia8',
    //     'dia9',
    //     'dia10',
    //     'dia11',
    //     'dia12',
    //     'dia13',
    //     'dia14',
    //     'dia15',
    //     'dia16',
    //     'dia17',
    //     'dia18',
    //     'dia19',
    //     'dia20',
    //     'dia21',
    //     'dia22',
    //     'dia23',
    //     'dia24',
    //     'dia25',
    //     'dia26',
    //     'dia27',
    //     'dia28',
    //     'dia29',
    //     'dia30',
    //     'dia31',
    //     'dia32',
    //     'dia33',
    //     'dia34',
    //     'dia35',
    //     'dia36',
    //     'dia37',
    //     'dia38',
    //     'dia39',
    //     'dia40',
    //     'dia41',
    //     'dia42'
    // ];
    
    var iddias = document.getElementsByClassName("dia");
    for(i = 0; i < iddias.length;i++){
            iddias[i].addEventListener("click", ()=>{
                console.log(iddias[i]);
                // iddias[i].classList.add('selected');
            })
        }
        console.log(iddias);

    })
    
    