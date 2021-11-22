import {parse} from 'acorn';

const result = parse('1 + 1', {ecmaVersion: 2020});

console.log(result);
