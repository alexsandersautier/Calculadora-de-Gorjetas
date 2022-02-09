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
    let doc = new jsPDF();
    doc.text("Olá mundo!");
    doc.save('Teste.PDF');
}
const mostraResult = function () {
    document.getElementById('txtQntPes').value = calculo();
    geraPdf();
}