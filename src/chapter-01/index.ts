import statement from "./statement.ts";
import invoices from "./mocks/invoices.json";
import plays from "./mocks/plays.json";

export default  () => {
    console.log("########### Chapter 01 ###########\n");
    console.log(statement(invoices, plays));
    console.log("##################################");
}

