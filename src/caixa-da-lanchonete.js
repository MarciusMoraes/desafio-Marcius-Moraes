class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        let soma=0;
        let res = "R$ ";
        res = this.verifyInvalidInputs(metodoDePagamento, itens);
        if (res != "R$ ") {
            return res;
        }
        else {
            soma = this.calculaItens(itens);
            soma = this.calculatePayMethod(soma, metodoDePagamento);
            res+=soma;
            res=res.replace(".",",");
            return res;
        }

    }

    verifyInvalidInputs(metodoDePagamento, itens) {
        var actualItem = "";
        var auxArray=[];
        let codeList = ["cafe", "chantily", "suco", "sanduiche", "queijo", "salgado", "combo1", "combo2"];
        if (itens.length == 0) {
            return "Não há itens no carrinho de compra!";
        }
        else if (!(metodoDePagamento == "dinheiro" || metodoDePagamento == "debito" || metodoDePagamento == "credito")) {
            return "Forma de pagamento inválida!";
        }
        else {
            for(let j=0; j<itens.length;j++){
                actualItem = itens[j].split(",");
                auxArray.push(actualItem[0]);
            }
            for (let i = 0; i < itens.length; i++) {
                actualItem = itens[i].split(",");
                if (codeList.indexOf(actualItem[0]) < 0) {
                    return "Item inválido!"
                }
                if (actualItem[1] <= 0) {
                    return "Quantidade inválida!"
                }
                if ((actualItem[0] == "chantily" && (auxArray.indexOf("cafe") < 0)) || (actualItem[0] == "queijo" && (auxArray.indexOf("sanduiche") < 0))) {
                    return "Item extra não pode ser pedido sem o principal"
                }
            }
            return "R$ ";
        }
    }

    calculaItens(itens) {
        var actualItem = "";
        let sum = 0;
        for (let i = 0; i < itens.length; i++) {
            actualItem = itens[i].split(",");
            switch (actualItem[0]) {
                case "cafe":
                    sum += 3 * actualItem[1];
                    break;
                case "chantily":
                    sum += 1.50 * actualItem[1];
                    break;
                case "suco":
                    sum += 6.20 * actualItem[1]
                    break;
                case "sanduiche":
                    sum += 6.50 * actualItem[1]
                    break;
                case "queijo":
                    sum += 2 * actualItem[1]
                    break;
                case "salgado":
                    sum += 7.25 * actualItem[1]
                    break;
                case "combo1":
                    sum += 9.50 * actualItem[1]
                    break;
                case "combo2":
                    sum += 7.50 * actualItem[1]
                    break;
            }
        }
        return sum;
    }

    calculatePayMethod(sum, metodoDePagamento) {
        if (metodoDePagamento == "dinheiro") {
            sum = sum - (0.05 * sum);
            return sum.toFixed(2);
        } else if (metodoDePagamento == "credito") {
            sum = sum + (0.03 * sum);
            return sum.toFixed(2);
        } else {
            return sum.toFixed(2);
        }
    }
}

export { CaixaDaLanchonete };
