'use strict';

function left_join(table1, table2) {
  let output = [];
  for (const key in table1) {
    let array = [];
    array.push(key, table1[key]);
    if (table2[key]) {
      array.push(table2[key]);
    } else {
      array.push(null);
    }
    output.push(array);
  }
  return output;
}


// const table1 = { '1st': 'Narotu', '2nd': 'Zoro', '3rd': 'Gohn' };
// const table2 = { '1st': 'Itachi', '4th': 'Ezana', '3rd': 'Hesoka' };

// console.log(left_join(table1, table2));

module.exports = left_join;