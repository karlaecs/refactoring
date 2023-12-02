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
2.  Change function declaration - `formatFor` to `usd`

### 4. Removing the total volume credits variable

1.  Split loop - to separate the accumulation into `volumeCredits`

        If we measured the code execution time before and after this refactoring, we would probably not notice any significant change in speed! In general this is what happens when repeating loops.

        Many of our intuitions about performance are contradicted by smart compilers, modern caching techniques.

        So remember, if your refactoring introduces performance degradations, finish before refactoring and make performance adjustments later.

2.  Extract function - `totalVolumeCredits`
3.  Rename variable - `volumeCredits` to `result` in totalVolumeCredits
4.  Replace temp with query - `volumeCredits` to `totalVolumeCredits` function
5.  Inline variable - remove `volumeCredits` variable

### 5. Removing the total amount variable

Repeat the previous sequence (step 4)
