const fs = require('fs');

let fileName = process.argv[2];
const path = process.argv[3];

console.log("creating React container folder for ", fileName);
const first = fileName.slice(0, 1);

const upper = first.toUpperCase() + fileName.slice(1);

if (!fs.existsSync(path)) {
  fs.mkdirSync(path);
}
process.chdir(path);
console.log("putting files into " + process.cwd());

fs.appendFile(upper + ".js", "import './" + fileName + ".scss'; \n import React from 'react';" +
  " \n class " + upper + " extends React.Component{ \n };" +
  " \n export default " + upper + ";", function (err) {
    if (err) throw err;

  });
fs.appendFile(fileName + "Reducers.js", " ", function (err) {
  if (err) throw err;

});
fs.appendFile(fileName + "Actions.js", "export const ACTION = 'ACTION' ", function (err) {
  if (err) throw err;

});
fs.appendFile(fileName + "Epics.js",
  "import { Observable, of, throwError} from 'rxjs'; \n" +
  "import  { ofType } from 'redux-observable'; \n" +
  "import { switchMap ,catchError, map} from 'rxjs/operators'; \n" +
  "const loginEpic = (action$) => action$.pipe(" +
  "\n ofType(ACTION)," +
  "\n switchMap(  action => {" +
  "\n }) );", function (err) {
    if (err) throw err;

  });
fs.appendFile(fileName + ".test.js", "import React from 'react' \n" +
  "import ReactDOM from 'react-dom' \n" +
  "import " + upper + " from './" + fileName + "' \n" +
  "it('renders without crashing', () => { });", function (err) {
    if (err) throw err;

  });
fs.appendFile(fileName + "Models.js", 'import', function (err) {
  if (err) throw err;

});
fs.appendFile(fileName + ".scss", '.' + fileName + "{}", function (err) {
  if (err) throw err;
  console.log("Finished creating folder");
});  