function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
    const toUpdate = document.querySelectorAll('.ranked-list li');
    toUpdate.forEach(function(item) {
        item.innerHTML = parseInt(item.innerHTML, 10) + n;
    });
}

function childIterator(level) {
    let child;
    // console.log('test level', level);
    if (level.children.length > 0) {
        child = level.querySelector('div');
        // console.log('child = ', child);
        return childIterator(child);
    } else {
        // console.log('return level', level);
        return level;
    }
}

function deepestChild() {
    // Test result => return document.querySelector('#grand-node div div div div')
    const topLevel = document.querySelector('#grand-node');
    return childIterator(topLevel);
    
    // NOTE : References for a recursive checker
    // https://stackoverflow.com/questions/16831523/how-to-find-deepest-element-from-a-html-tree-with-a-certain-class
    // https://blog.wax-o.com/2014/01/how-to-find-deep-and-get-parent-in-javascript-nested-objects-with-recursive-functions-and-the-reference-concept-level-beginner/
    // https://stackoverflow.com/questions/11701118/get-first-child-node-of-specific-type-javascript
    
}