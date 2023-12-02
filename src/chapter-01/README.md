# Steps

### 1. Decomposing the statement function

Identify the points that separate different parts of the overall behavior.

1.  Extract function - `amountFor`
2.  Rename variable - `thisAmount` to `result` in amountFor
3.  Replace temp with query - `play` to `playFor` function

        Temporary variables create many locally scoped names, complicating extractions

4.  Inline variable - remove `play` variable
5.  Change function declaration - remove `playFor` from the parameters `amountFor`
6.  Inline variable - remove `thisAmount` variable

### 2. Extracting the calculation of credits by volume

1.  Extract function - `volumeCreditsFor`
2.  Rename variable - `volumeCredits` to `result` in volumeCreditsFor

### 3. Removing the format variable

1.  Extract function - `formatFor`
