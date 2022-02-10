const valorP = function () {
    var pega = document.getElementById('txtVlr');
    var valor = parseFloat(pega.value);
    return valor;
}

const taxaP = function () {
    var select = document.getElementById('txtTip');
    var taxa = select.options[select.selectedIndex].value;
    if (taxa == 2) {
        taxa = 0.15;
    } else if (taxa == 3) {
        taxa = 0.10;
    } else if (taxa == 4) {
        taxa = 0.05;
    } else {
        alert('Valor incorreto');
    }
    return taxa;
}

const pessoaP = function () {
    var pega = document.getElementById('txtPes');
    var pessoa = parseInt(pega.value);
    return pessoa;
}
const pegaTxt = function () {
    let pegaTxt = document.getElementById('txtInfo');
    let info = pegaTxt.value;
    return info;
}
const calculo = function () {
    let x = valorP();
    let y = taxaP();
    let z = pessoaP();
    let vlrGor = x * y;
    vlrGor = vlrGor / z;
    return vlrGor;
}

function geraPdf() {
    let dados = valorP();
    let dados2 = taxaP();
    let dados3 = pessoaP();
    let dados4 = calculo();
    let dados5 = pegaTxt();
    let janela = window.open('', '', 'width=800,heigth=600');
    janela.document.write('<html><head>');
    janela.document.write('<title>Cupom</title></head>');
    janela.document.write('<body>');
    janela.document.write('Valor total: R$' + dados + '</br>');
    janela.document.write('Taxa de avalição escolhida: %' + dados2 + '</br>');
    janela.document.write('Quantidade de pessoas: ' + dados3 + '</br>');
    janela.document.write('Local e Data: ' + dados5 + '</br>');
    janela.document.write('Valor da gorjeta por pessoa: RS' + dados4 + '</br>');
    janela.document.write('</body></html>');
    janela.document.close();
    janela.print();
}
const mostraResult = function () {
    document.getElementById('txtQntPes').value = calculo();
    geraPdf();
}