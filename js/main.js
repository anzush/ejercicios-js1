function suma(){
    var a;
    var b;
    var r;

    a = parseFloat(prompt("Por favor ingrese el primer valor: "));
    b = parseFloat(prompt("Por favor ingrese el segundo valor: "));

    r= a+b;

    alert ("El resultado es: "+r);
}

function srmd() {
    var n1;
    var n2;
    var s;
    var r;
    var m;
    var d;

    n1 = parseFloat(prompt("Ingrese el primer valor"));
    n2 = parseFloat(prompt("Ingrese el segundo valor"));

    s = n1 + n2;
    r = n1 - n2;
    m = n1 * n2;
    d = n1 / n2;

    alert("El resultado de la suma es: " + (n1 + n2) +
        "\nEl resultado de la resta es: " + (n1 - n2) +
        "\nEl resultado de la multiplicacion es: " + (n1 * n2) +
        "\nEl resultado de la divicion es: " + (n1 / n2));
}

function mayorDeDosNumeros() {

    var n1;
    var n2;

    n1 = parseInt(prompt("Ingrese el primer valor"));
    n2 = parseInt(prompt("Ingrese el segundo valor"));

    if (n1 < n2) {
        alert(n1 + " es menor que " + n2);
    } else {
        alert(n2 + " es menor que " + n1);
    }

}

function menorTresNumeros() {
    var n1;
    var n2;
    var n3;

    n1 = parseInt(prompt("Ingrese el primer valor"));
    n2 = parseInt(prompt("Ingrese el segundo valor"));
    n3 = parseInt(prompt("Ingrese el tercer valor"));

    if (n1 <= n2 && n1 <= n3) {
        alert(n1 + " es el numero menor");
    } else if (n2 <= n1 && n2 <= n3) {
        alert(n2 + " es el numero menor");
    } else {
        alert(n3 + " es el numero menor");
    }
}

function mayorTresNumeros() {
    var n1;
    var n2;
    var n3;

    n1 = parseInt(prompt("Ingrese el primer valor"));
    n2 = parseInt(prompt("Ingrese el segundo valor"));
    n3 = parseInt(prompt("Ingrese el tercer valor"));

    if (n1 >= n2 && n1 >= n3) {
        alert(n1 + " es el numero mayor");
    } else if (n2 >= n1 && n2 >= n3) {
        alert(n2 + " es el numero mayor");
    } else {
        alert(n3 + " es el numero mayor");
    }
}

function parImpar() {
    var n1;

    n1 = parseInt(prompt("Ingrese el valor"));

    if (n1 % 2 == 0) {
        alert(" es el numero es par");
    } else {
        alert(" es el numero impar");
    }
}

function cuadradoNumero() {
    var n1;

    n1 = parseInt(prompt("Ingrese el valor al que quiere elevar al cuadrado"));
    alert("El resultado es: " + Math.pow(n1, 2));
}

function areaTriangulo() {
    var b;
    var a;
    b = parseFloat(prompt("Ingrese la base del triangulo"));
    a = parseFloat(prompt("Ingrese la altura del triangulo"));
    alert("El area del triangulo es de: " + (b * a)/2);
}

function mAcm() {
    var m;
    m = parseFloat(prompt("Ingrese los M que quiere convertir a CM"));
    alert(m+" M convertidos a CM es: "+ m*100 +" CM");
}

function añoNacimiento() {
    var e;
    var aa;

    e = parseInt(prompt("Ingrese su edad"));
    aa = parseInt(prompt("Ingrese el año actual"));

    alert("el a�o de su nacimiento fue el : " + (aa - e));
}

function banco() {
    var a;
    var d;
    var g;
    d = parseFloat(prompt("Ingrese la cantidad de dinero que guardara en el banco"));
    a = parseFloat(prompt("Ingrese la cantidad de años que desea guardar su dinero"));
    g = (d * 0.24) * a;
    alert("Ganancia: $" + g + " pesos" +
        "\nDinero generado en " + a + " a�os: $" + (g + d));
}

function notas() {
    var n1;
    var n2;
    var n3;
    var n4;
    var n5;
    var p;

    n1 = parseFloat(prompt("ingrese el valor de la primera nota"));
    n2 = parseFloat(prompt("ingrese el valor de la primera nota"));
    n3 = parseFloat(prompt("ingrese el valor de la primera nota"));
    n4 = parseFloat(prompt("ingrese el valor de la primera nota"));
    n5 = parseFloat(prompt("ingrese el valor de la primera nota"));
    p = (n1 + n2 + n3 + n4 + n5) / 5;
    if (p >= 1 && p <= 2.9) {
        alert("Su promedio es de: " + p + " por lo tanto reprobo ingles");
    } else if (p >= 3 && p <= 5) {
        alert("Su promedio es de: " + p + " por lo tanto aprobo ingles");
    } else {}
}

function descuento() {
    var k;
    var T;
    var Ds;
    k=parseFloat(prompt("Por favor ingrese el total de kilos de Manzanas"));
    T=k*4.500;
    if(k>=3.0 && k<=5.0) {
        Ds= (T - (T*0.1))
    }
    else if (k>=6.0 && k<=10) {
        Ds= (T - (T*0.15))

    }
    else if(k>=10){
        Ds= (T - (T*0.2))
    } 
    
    alert("El total de kilos  es de:  " + k);
    alert("Su total con descuento es de:  "+ Ds);
}
