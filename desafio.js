//Funçao da parte superior da ampulheta
function ampulhetacrescente(n) {
    i = n;
    while (i >= 0) {
        var str = "  #";
        console.log(str.repeat(i));
        i--;
        if (i === 0) {
            break;
        }
    }
}

// Funçao da parte inferior da ampulheta      
function ampulhetadecrescente(n) {
    i = 0;
    while (i <= n) {
        var str = "  #";
        console.log(str.repeat(i));
        i++;
        if (i === n) {
            break;
        }
    }
}


inicio = console.log('----------------------------------------------------');
// Solicitar ao usuario o valor
const n = prompt("Qual o valor desejado???");

//Executar funçoes com o valor solicitado
ampulhetacrescente(n)
ampulhetadecrescente(n)

final = console.log('----------------------------------------------------');
console.log('Fim')