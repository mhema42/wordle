// get string from input and convert to array
document.getElementById("button").addEventListener("click", () => {
    document.getElementById("result").innerHTML = ("");
    const wordle_word = document.getElementById("wordle_word").value;
    const guess_word = document.getElementById("guess_word").value;
    
    //check if guessed word is correct
    if (guess_word === wordle_word) {
        return document.getElementById("result").innerHTML = ("Your guess is correct, congratulation!");
    }
    else {   
    //convert strings to arrays
    let wordle_array = wordle_word.split("");
    let guess_array = guess_word.split("");
    // add properties to each letter
    wordle_array = wordle_array.map((element) => ({
        ...element,
        letter: "unchecked"
    }));
    guess_array = guess_array.map((element) => ({
        ...element,
        letter: "unchecked"
    }));

    console.log(wordle_array)
    console.log(guess_array)
    
    //check if guessed word contains correct amount of letters
    if (guess_array.length == wordle_array.length) {
        let result = compare(guess_array, wordle_array)
        }
        else {
            return document.getElementById("result").innerHTML = ("Your guess must contain " + wordle_array.length + " letters");
        }
    }
});

// compare input array to wordle array
function compare(guess_array, wordle_array) {
    for (let i=0; i < guess_array.length; i++) {
        const guess_letter = guess_array[i][0];
        const wordle_letter = wordle_array[i][0]
        if (guess_letter == wordle_letter) {  
            guess_array[i].letter = "correct"
        }
        else {
            const letter_exist = wordle_array.find(guess_letter);
            console.log(letter_exist);
            if (guess_letter == letter_exist) {
                guess_array[i].letter = "missplaced"
            }
            else {
            guess_array[i].letter = "incorrect"
            }
        }
    };
    console.log(guess_array)
}


       /*wordle_array.map(function() {
            if (guess_array.value == wordle_array.value) {
                newarray.push({"letter": guess_array.value, "label": "correct"});
                
            }
            else {
                newarray[i].push({"letter": guess_array.value, "label": "incorrect"});
            }
            console.log(newarray);
        });
        
        if (guess_array[i] == wordle_array[i]) {
            result.push("correct");
        }
        else {
            result.push("incorrect");
        } */
   
    // return newarray;