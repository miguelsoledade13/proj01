let valor = Number(prompt("Digite o valor da compra aqui:"));

if (valor >= 100){
    let desconto = valor * 0.10;
    let total = valor - desconto;

    alert("Você ganhou 10% de desconto");
    alert("Desconto: R$ " + desconto);
    alert("Total a pagar: R$ " + total);
} else {
    alert("Você não tem desconto.");
}
