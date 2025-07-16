//Print each vowel of  in order on a new line, then print each consonant in order on a new line. Return nothing
//https://www.hackerrank.com/challenges/js10-loops/problem?isFullScreen=true
function vowelsAndConsonants(s) {

    var vowels = ['a', 'e', 'i', 'o', 'u']
    for (var i = 0; i < s.length; i++)
        {
            if (vowels.indexOf(s[i]) > -1)
                {
                    console.log(s[i]);
                }
        }
    
    for (var j = 0; j < s.length; j++)
        {
            if (vowels.indexOf(s[j]) < 0)
                {
                    console.log(s[j]);
                }
        }
    
}
