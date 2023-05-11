import { parseTex, evaluateTex, Scope } from '../src/index';
import { number, MathNode } from 'mathjs';

function evaluate(texStr: string, scope?: Scope) {
  return number(evaluateTex(texStr).evaluated);
}
function debuggableLog(texStr: string, implicit: boolean = true) {
  let parsed = parseTex(texStr, implicit);
  console.log(texStr.toString() + ": " + JSON.stringify(parsed));
  return parsed;
}

if (process.env.NODE_ENV != 'test') {
}
test('Parse log base 4', () => {
  console.log(debuggableLog('abf', false));
  console.log(debuggableLog('\\log(x)', false));
  console.log(debuggableLog('\\ln(x)', false));
  console.log(debuggableLog('abf', false));
  console.log(debuggableLog('a^b', false));
  console.log(debuggableLog('abf_{a2}', false));
  console.log(debuggableLog('abf_{a2}^2', false));
  console.log(debuggableLog('abf_{a2}^2'));
  console.log(debuggableLog('abf_a'));
  console.log(debuggableLog('\\log_3(5)'));
  // NOTE: this should not work, absolute value requires \left and \right
  // expect(evaluate('| -6 |')).toStrictEqual(6);
});