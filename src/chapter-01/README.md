# Steps

### Decomposing the statement function

Identify the points that separate different parts of the overall behavior.

1.  Extract function - `amountFor`
2.  Rename variable - `thisAmount` to `result` in amountFor
3.  Replace temp with query - `play` to `playFor` function

        Temporary variables create many locally scoped names, complicating extractions

4.  Inline variable - remove `play` variable
5.  Change function declaration - remove `playFor` from the parameters `amountFor`
