
        //[1, 2, 3, 4, 5] 
function somaArray(lista) {
    let total = 0
    let N =  lista.length


    for(let i=0; i<N; i++) {
        total += lista[i];   
    }
        return total;


    }

    console.log(somaArray([1, 2, 3, 4, 5]))
    console.log(somaArray([2, 4, 6, 8]))
    console.log(somaArray([1, 3, 5, 7]))
    console.log(somaArray([0]))
    console.log(somaArray([]))