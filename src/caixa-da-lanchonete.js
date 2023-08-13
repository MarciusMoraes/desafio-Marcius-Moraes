class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
    let res="";
    res=this.verifyInvalidInputs(metodoDePagamento, itens);
    return res;
}

verifyInvalidInputs(metodoDePagamento, itens){
    var actualItem="";
    var arrAux="";
    let codeList = ["cafe","chantily","suco","sanduiche","queijo", "salgado", "combo1","combo2"];
    if(itens.length==0){
        return "Não há itens no carrinho de compra!";
     }
     else if(!(metodoDePagamento =="dinheiro" || metodoDePagamento =="debito" || metodoDePagamento =="credito")){
        return "Forma de pagamento inválida!";
    } 
    else{
        for(let i=0;i<itens.length;i++){
            actualItem=itens[i].split(",");
            console.log(codeList.indexOf(actualItem[0]));
            console.log(itens);
            if(codeList.indexOf(actualItem[0])<0){
                return "Item inválido!"
            }
            else if(actualItem[1]<=0){
                return "Quantidade inválida!"
            }
            else if((actualItem[0]=="chantily" && (itens.indexOf(`cafe,${actualItem[1]}`)<0)) || (actualItem[0]=="queijo" && (itens.indexOf(`sanduiche,${actualItem[1]}`)<0))){
                return "Item extra não pode ser pedido sem o principal"
            }
            else{
                actualItem=" "
            }
        }
        return "";
    }
}
}
export { CaixaDaLanchonete };
