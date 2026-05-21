const name = "tanishk"
const repocount = 50;

 // console.log(name + repocount + " values"); // recomended to not use in real . as not very good and view friendlt

 console.log(`my name is ${name} and my repocount is ${repocount} values`);
 const gameName = new String('tanishk-hddf-com');
 console.log(gameName);
 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(0));
 console.log(gameName.indexOf('t'));

 const newstring = gameName.substring(0,3) // cant use negattive values 
 console.log(newstring);
 const anotherstring = gameName.slice(-8,4); // can use negative values (it starts from end of string)
 console.log(anotherstring) // if we want to start from end of string and want to go till end of string then we can use slice with one parameter
 const newstringone = "     tanishk       "
 console.log(newstringone)
 console.log(newstringone.trim());  // trim also has end and beginind functon

 const url = "https://tanishk.com/hitesh%20chaudhary" // " " in brouser -> %20
 console.log(url);
 
 console.log(url.replace('%20','-'));
 console.log(url.includes('sundar')); //  it gives if includes :it is case sensitive
 console.log(gameName.split('-')); // it gives us an array of string by splitting the string by the given parameter (it can be space or any other character)
 
 


 

 




 


 
 


