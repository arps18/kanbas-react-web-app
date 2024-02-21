import AddingAndRemovingDataToFromArrays from "./arrays/AddingAndRemovingDataToFromArrays";
import ArrayIndexAndLength from "./arrays/ArrayIndexAndLength";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ArrowFunctions from "./functions/ArrowFunctions";
import ES5Function from "./functions/ES5Functions";
import FunctionParanthesisAndParameters from "./functions/FunctionParanthesisAndParameters";
import ImpliedReturn from "./functions/ImpliedReturn";
import BooleanVariables from "./variables/BooleanVariables";
import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";

function JavaScript() {
    console.log("hello World!");
    
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants />
          <VariableTypes />
          <BooleanVariables />
          <IfElse />
          <TernaryOperator />
          <ES5Function />
          <ArrowFunctions />
          <ImpliedReturn />
          <FunctionParanthesisAndParameters />
          <WorkingWithArrays />
          <ArrayIndexAndLength />
          <AddingAndRemovingDataToFromArrays />
       </div>
    );
 }
 export default JavaScript
 
 