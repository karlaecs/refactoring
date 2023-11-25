import statement from "./statement.ts";
import invoices from "./mocks/invoices.json";
import plays from "./mocks/plays.json";

export default  () => {
    console.log(statement(invoices, plays));
}

