

// =======Object======


var bravo={
    name:'Yasin',
    age:17,
    group: 'A',
    project:{
        primary: 'one',
        secondery: 'two',
        last: 'three',
    },
}
 console.log(bravo);
 console.log(bravo.project);
 console.log(bravo.project.last);


 // ===========Array==========

 var x = ['one','two','three','four',10,20,'mango',30,true,'Ajad','Yasin'];

 console.log(x);

//  single array vew
console.log(x[8]);

     // 1st delete
x.shift();
console.log(x);

    // 1st add
x.unshift('I LOve You');
console.log(x);

    // last add
x.push('ami');
console.log(x);

    //last delete
x.pop();
console.log(x);


// =======Function=========

function go(){
    console.log('HERE IT IS.');
}
go();

    // function in the function
function come(){
    console.log('hey man.!');
    go()
}
come();

function fun(){
    console.log("Hi, I'm Ajad. Who are you?");
    go();
    come();
}
fun()


//  ========Condition=========
var a= 50;
var b= 70;


if(a>b || a==50){
    console.log('It,s a condition..');
}
else if(a==b){
    console.log('second condition');
}
else{
    console.log('loss condition..!');
}



// Loop

// Operator   Example    Same As
//   ++       i ++        i = i+1
//   --       i --        i = i-1
//   +=       i +=3       i = i+3
//   -=       i -=3       i = i-3
//   *=       i *=3       i = i*3
//   /=       i /=3       i = i/3
//   %=       i %=3       i = i%3

for(var i=0;i<=15;i+=3){
    console.log(i);
}

        // practise

var namota=4;
for(var i=1;i<=10;i++){

    document.write(namota + ' X ' + i + ' = ' + namota*i+'<br>');
}