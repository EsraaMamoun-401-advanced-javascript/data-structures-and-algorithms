'use strict';

let left_join = require('../challenges/leftJoin/left-join');

describe('Left Join Module', () => {

  it('The output table contents', () => {

    const table1 = { '1st': 'Narotu', '2nd': 'Zoro', '3rd': 'Gohn' };
    const table2 = { '1st': 'Itachi', '4th': 'Ezana', '3rd': 'Hesoka' };

    let output = left_join(table1, table2);

    expect(output[0][0]).toEqual('1st');
    expect(output[1][0]).toEqual('2nd');
    expect(output[2][0]).toEqual('3rd');
  
    expect(output[0][1]).toEqual('Narotu');
    expect(output[1][1]).toEqual('Zoro');
    expect(output[2][1]).toEqual('Gohn');
  
    expect(output[0][2]).toEqual('Itachi');
    expect(output[1][2]).toEqual(null);
    expect(output[2][2]).toEqual('Hesoka');

  });

});