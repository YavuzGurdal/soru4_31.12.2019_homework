/*
4. Problem :
    Parametre olarak iki adet number tipi değer alacak. 
     Birinci değer başlangıç noktası; ikinci değer ise üretilecek rakam adedi 
     uzunluğu olacak. 
    Başlangıç numarası dahil olmak üzere ikinci parametre uzunluğunca birer 
    artırarak yeni bir array oluşturacak fonksiyonu yazmak.  
    
    Örneğin : 
    console.log(func_name (-6, 4));   ---> [-6, -5, -4, -3] olacak şekilde.
*/



let siralamaFunc = function ( baslangic, uzunluk) {  

    let arr = [];

    for (let i = 0; i < uzunluk; i++) {
        
        arr[i] = baslangic;  
        baslangic ++;  
    }
    return arr;
}

console.log(siralamaFunc (-6, 4));