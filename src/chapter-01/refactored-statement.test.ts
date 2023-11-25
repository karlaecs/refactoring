import refactoredStatement from "./refactored-statement";
import plays from "./mocks/plays.json";
import invoices from "./mocks/invoices.json";

test("refactored statement", () => {
  const result = 
`Statement for BigCo
   Hamlet: $650.00 (55 seats)
   As You Like It: $580.00 (35 seats)
   Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`;

  expect(refactoredStatement(invoices, plays)).toBe(result);
});
