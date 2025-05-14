function sol1a() {
    var a = 4.5
    var b = (0.4)*Math.pow(a, 4)+(3.1)*Math.pow(a, 2)-(162.3)*a-(80.7);
    document.getElementById("res").innerHTML=b
}

function sol1b() {
    var a = 4.5
    var c = (Math.pow(a, 3)-23)/Math.cbrt(Math.pow(a,2)+17.5);
    document.getElementById("res6b").innerHTML=c
}

function sol7a() {
    var t = 3.2
    var d = (1/2)*Math.pow(Math.E,(2*t))-3.81*Math.pow(t,3);
    document.getElementById("res7a").innerHTML=d
}

function sol7b() {
    var t = 3.2
    var e = (6*Math.pow(t,2)+6*t-2)/(Math.pow(t,2)-1);
    document.getElementById("res7b").innerHTML=e
}

function sol8a() {
    var x = 6.5
    var y = 3.8
    var f = Math.pow((Math.pow(x,2)+Math.pow(y,2)),(2/3))+(x*y)/(y-x);
    document.getElementById("res8a").innerHTML=f
}

function sol8b() {
    var x = 6.5
    var y = 3.8
    var g = (Math.sqrt(x+y))/Math.pow((x-y),2)+2*Math.pow(x,2)-x*Math.pow(y,2);
    document.getElementById("res8b").innerHTML=g
}

function sol9a() {
    var cc = 4.6
    var dd = 1.7
    var aa = cc * Math.pow(dd,2)
    var bb = (cc+aa)/(cc-dd)
    var f = Math.pow(Math.E,(dd-bb))+Math.cbrt(cc+aa)-Math.pow(cc*aa,dd);
    document.getElementById("res9a").innerHTML=f
}

function sol9b() {
    var cc = 4.6
    var dd = 1.7
    var aa = cc * Math.pow(dd,2)
    var bb = (cc+aa)/(cc-dd)
    var t = 3.2
    var g = (dd)/(cc)+Math.pow((cc*t)/(bb),2)-Math.pow(cc,dd)-(aa)/(bb);
    document.getElementById("res9b").innerHTML=g
}

function sol10a() {
    var xx  = Math.PI/10
    var izq1 = Math.pow(Math.cos(xx),2)-Math.pow(Math.sin(xx),2)
    var der1 = 1-2*Math.pow(Math.sin(xx),2) 
    var h
    if (Math.abs(izq1-der1)< 1e-10) {
        h= "Es identidad";
        } else {
        h= "No es identidad";
        }
    document.getElementById("res10a").innerHTML=h
}


function sol10b() {
    var xx  = Math.PI/10
    var izq2 = (Math.tan(xx))/(Math.sin(xx)-(2*Math.tan(xx)))
    var der2 = 1/(Math.cos(xx)-2) 
    var i
    if (Math.abs(izq2-der2)< 1e-10) {
        i= "Es identidad";
        } else {
        i= "No es identidad";
        }
    document.getElementById("res10b").innerHTML=i
}