/* Variaveis do documento*/

var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.resultados');
var baixoOuAlto = document.querySelector('.altobaixo');

var envioPalpite = document.querySelector('.enviarpalpite');
var campoPalpite = document.querySelector('.CampoPalpite');
var div = document.querySelector('.botaoIniciaNovoJogo');

var contagemPalpite = 1;
var botaoReinicio;

campoPalpite.focus();

function conferirPalpite(){
    var palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpite === 1){
        palpites.textContent = 'palpites anteriores: ';
    } 
    palpites.textContent += palpiteUsuario + ' ';

    if(palpiteUsuario === numeroAleatorio){
        ultimoResultado.textContent = 'Parabéns! Você acertou!';
        ultimoResultado.setAttribute('style','background-Color:green;padding:2px 50px;border-Radius:10px;')
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    } else if (contagemPalpite === 10){
        ultimoResultado.textContent = 'Fim de Jogo!';
        ultimoResultado.style.padding = '0.125rem 3.125rem';
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    }else{
        ultimoResultado.textContent = 'Errado';
        ultimoResultado.setAttribute('style','background-Color:red;padding:0.125rem 3.125rem;border-Radius:0.625rem;');
        if (palpiteUsuario < numeroAleatorio){
            baixoOuAlto.textContent = 'Seu palpite está MUITO BAIXO!';
        }else if(palpiteUsuario > numeroAleatorio){
            baixoOuAlto.innerHTML = "Seu palpite está <b> MUITO ALTO! </b>";
        }
    }

    contagemPalpite ++;
    campoPalpite.value = '';
    campoPalpite.focus();

}

envioPalpite.addEventListener('click', conferirPalpite);

function configFimDeJogo(){
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.setAttribute('style','width:15.625rem; border-Radius:0.938rem');
    botaoReinicio.textContent = 'Iniciar Novo Jogo!';
    div.appendChild(botaoReinicio);
    div.style.display = 'flex';
    div.style.justifyContent = 'center'
    botaoReinicio.addEventListener('click', reiniciarjogo);
}

function reiniciarjogo(){
    contagemPalpite = 1;

    var reiniciarParas = document.querySelectorAll('.caixaresultados p');
    for (var i = 0; i < reiniciarParas.length; i++){
        reiniciarParas[i].textContent = '';
    }
    botaoReinicio.parentNode.removeChild(botaoReinicio);

    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = '';
    campoPalpite.focus();
   
    ultimoResultado.setAttribute('style','padding:0px;background-Color:whrite');

    numeroAleatorio = Math.floor(Math.random() * 100 ) + 1;
}
