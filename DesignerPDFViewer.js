h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5 ,5, 5, 5, 5, 5, 5, 5 ,5 ,5, 5, 5, 5,5]
word = 'abc'

const designerPdfViewer = (h, word) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let lowerWord = word.toLowerCase();
    let maxHeight = h[alphabet.indexOf(lowerWord[0])]

    for(let i=0; i<word.length; i++) 
        if(h[alphabet.indexOf(lowerWord[i])] > maxHeight) maxHeight = h[alphabet.indexOf(lowerWord[i])]
    
    return maxHeight*word.length;
}

console.log(designerPdfViewer(h, word));