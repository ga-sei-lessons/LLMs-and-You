# LLMs and You
### or How I Learned To Stop Worrying And Love The Impendending Takeover By Our Future AI Overlords

## Getting Started

* fork and clone this repo
* cd into the new directory and run `npm i` to install the required packages
* take some time to get aquainted with the included code
* use `npm run test` to run the unit tests
* use `npm run docs` to generate the documentaion
* use `open docs/index.html` to view the documentaion in your browser

## LLM use cases for software engineers

### Supercharge learning    with caution

* learn about jsdoc    use CGTP to learn about the basics of the `jsdoc` package

#### Other learning use cases

* understand code such a leetcode ansers
* learn about CS concecpts    create examples of abstract ideas
* generating code challenges for a new language

#### You Do

* learn about jest    use CGTP to brush up on`jest`

### Automate the boring stuff

#### We do: Writing docs with CGPT

Use the following custom instructions to optimize documentaion output:

**About you**:

```
I am a software engineer writing documentation for code.
```

**How should chatgpt respond?**:

```
your responses should use the jsdoc format based on the following template:

\```
/**
 * Adds two numbers.
 *
 * @param {number} a   The first number.
 * @param {number} b   The second number.
 * @returns {number} The sum of the two numbers.
 * 
 * @example
 * add(10, 15); // 25
 * add(2.5, 2.5); // 5
 * 
 */
function add(a, b) {
  return a + b;
}
\```

Do not respond with any text other than jsdoc comments and the associated functions you are given as input.
```

#### You Do: Write unit tests with CGPT

* create custom instructions for this activity
* write a unit test for each function in `MathUtils`

#### Other boring stuff to automate

* write markdown

### Debug Code

* copy pasta those bugs

### Generating code

* ask for broad outlines of goals without letting it get too in the weeds with implementaion
* break tasks into the smallets possible atom/unit and have chatgpt solve/write them individually

## Resources

* slide decks
* debugging code jupiter notebook
* yt veedo

