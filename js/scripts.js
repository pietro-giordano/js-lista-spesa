/*
Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while

1. creare lista della spesa
2. prendere valori uno alla volta e stamparli
*/
const shopList = [
      'carne',
      'uova',
      'latte',
      'frutta',
      'verdura',
      'fazzoletti',
      'carta igienica'
]

let i = 0;
while (i < shopList.length) {

      const newLi = document.createElement('li');
      newLi.innerHTML = shopList[i];
      document.querySelector('ul').append(newLi);

      i++;

}