import tokenizeTex from './tokenizeTex';
import parseTokens from './parseTokens';
import mathjs from './customMath';
// scope used by evaluateTex to resolve identifiers
type Scope = { [key: string]: any };

/**
 * Parse a TeX math string into a MathJS expression tree.
 * @returns Returns an object containing the root node of a MathJS expression tree
 *          and variables that need to be defined.
 */
function parseTex(texStr: string, implicitMult: boolean = true) {
  const tokens = tokenizeTex(texStr);
  //  console.log(`${texStr.toString()}: ${JSON.stringify(tokens)}`);
  return parseTokens(tokens, implicitMult);
}

// /**
//  * Evaluate a TeX math string, returning the result as a MathJS MathType.
//  */
// function evaluateTex(texStr: string, scope?: Scope) {
//   const root = parseTex(texStr);
//   const evaluated = root.evaluate(scope);
//   return { evaluated, scope };
// }

export {
  parseTex,
  mathjs as customMath,
  // evaluateTex,
  Scope,
};
