const hen={
    name : "Helen",
    eggCount  : 0,
    layAnEgg (){
        this.eggCount ++;
        return "EGG";
    }
}; 

document.write(hen.name);
document.write("<br>");
document.write(hen.eggCount);
document.write("<br>");
document.write(hen.layAnEgg());
document.write("<br>");
document.write(hen.layAnEgg());
document.write("<br>");
document.write(hen.eggCount);
