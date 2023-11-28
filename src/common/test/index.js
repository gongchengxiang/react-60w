import './esModuleTest';
import './importTest';

// import a, {b, c} from './exportTest';
import * as x from './exportTest';

console.log(9, x);
