var list_array=[];

function submit(){
    var name_1= document.getElementById("st1").value ;
    var name_2= document.getElementById("st2").value ;
    var name_3= document.getElementById("st3").value ;
    var name_4= document.getElementById("st4").value ;

    list_array.push(name_1);
    list_array.push(name_2);
    list_array.push(name_3);
    list_array.push(name_4);

    console.log(list_array);
    document.getElementById("display_names").innerHTML=list_array;
    document.getElementById("submit_btn").style.display="none";
    document.getElementById("sort_btn").style.display="inline-block";


}

function sorting(){
    list_array.sort();
    document.getElementById("display_names").innerHTML=list_array;

}