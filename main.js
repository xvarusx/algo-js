var chain=window.prompt('Enter your sentence');
/**return the length of a string ***/
    window.alert(chain.length);
    /******devid the string into order list and return an array **** */
    chain2= chain.split(' ');
    window.alert(chain2.length); 
    /*******return the number of vowels**** */
function vowels(chain){
    sum=0;
    for(var i=0;i<chain.length;i++){
        if(chain[i].toLowerCase()==='a'|| chain[i].toLowerCase()==='e'|| chain[i].toLowerCase()==='u'|| chain[i].toLowerCase()==='i'|| chain[i].toLowerCase()==='o')
        { 
            sum+=1;   
        } 
}
return sum;
}
chain3=vowels(chain);
window.alert(chain3);
