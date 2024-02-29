function cambiarUnidades() {
    const type = document.getElementById("type").value;

    if (type === "tiempo") {
        const fromSelect = document.getElementById("from");
        fromSelect.innerHTML = `
            <option value="s">Segundos</option>
            <option value="min">Minutos</option>
            <option value="hr">Horas</option>
        `;

        const toSelect = document.getElementById("to");
        toSelect.innerHTML = `
            <option value="s">Segundos</option>
            <option value="min">Minutos</option>
            <option value="hr">Horas</option>
        `;
    } else if (type === "masa") {
        const fromSelect = document.getElementById("from");
        fromSelect.innerHTML = `
            <option value="kg">Kilogramos</option>
            <option value="lb">Libras</option>
            <option value="g">Gramos</option>
            <option value="t">Toneladas</option>
        `;

        const toSelect = document.getElementById("to");
        toSelect.innerHTML = `
            <option value="kg">Kilogramos</option>
            <option value="lb">Libras</option>
            <option value="g">Gramos</option>
            <option value="t">Toneladas</option>
        `;
    } else if (type === "temperatura") {
        const fromSelect = document.getElementById("from");
        fromSelect.innerHTML = `
            <option value="k">Kelvin</option>
            <option value="c">Celsius</option>
            <option value="f">Fahrenheit</option>
        `;

        const toSelect = document.getElementById("to");
        toSelect.innerHTML = `
            <option value="k">Kelvin</option>
            <option value="c">Celsius</option>
            <option value="f">Fahrenheit</option>
        `;
    } else if (type === "cantidad") {
        const fromSelect = document.getElementById("from");
        fromSelect.innerHTML = `
            <option value="mol">Mol</option>
            <option value="g">Gramos</option>
            <option value="kg">Kilogramos</option>
        `;

        const toSelect = document.getElementById("to");
        toSelect.innerHTML = `
            <option value="mol">Mol</option>
            <option value="g">Gramos</option>
            <option value="kg">Kilogramos</option>
        `;
    } else if (type === "longitud") {
        const fromSelect = document.getElementById("from");
        fromSelect.innerHTML = `
            <option value="m">Metros</option>
            <option value="cm">Centímetros</option>
            <option value="km">Kilómetros</option>
            <option value="ft">Pies</option>
            <option value="in">Pulgadas</option>
        `;

        const toSelect = document.getElementById("to");
        toSelect.innerHTML = `
            <option value="m">Metros</option>
            <option value="cm">Centímetros</option>
            <option value="km">Kilómetros</option>
            <option value="ft">Pies</option>
            <option value="in">Pulgadas</option>
        `;
    }
}


function convertir() {

    let cantidad = document.getElementById("input").value;
    let de = document.getElementById("from").value;
    let a = document.getElementById("to").value;


    //tiempo
    if (de === "s") {
        if (a === "min") {
            cantidad /= 60;
        } else if (a === "hr") {
            cantidad /= 3600;
        }
    } else if (de === "min") {
        if (a === "s") {
            cantidad *= 60;
        } else if (a === "hr") {
            cantidad /= 60;
        }
    } else if (de === "hr") {
        if (a === "s") {
            cantidad *= 3600;
        } else if (a === "min") {
            cantidad *= 60;
        }

        //masa
    } else if (de === "kg") {
        if (a === "lb") {
            cantidad *= 2.20462;
        } else if (a === "g") {
            cantidad *= 1000;
        } else if (a === "t") {
            cantidad /= 1000;
        }
    } else if (de === "lb") {
        if (a === "kg") {
            cantidad *= 0.453592;
        } else if (a === "g") {
            cantidad *= 453.592;
        } else if (a === "t") {
            cantidad /= 2204.62;
        }
    } else if (de === "g") {
        if (a === "kg") {
            cantidad /= 1000;
        } else if (a === "lb") {
            cantidad /= 453.592;
        } else if (a === "t") {
            cantidad /= 1000000;
        }
    } else if (de === "t") {
        if (a === "kg") {
            cantidad *= 1000;
        } else if (a === "lb") {
            cantidad *= 2204.62;
        } else if (a === "g") {
            cantidad *= 1000000;
        }

        //temperatura
    } else if (de === "k") {
        if (a === "c") {
            cantidad -= 273.15;
        } else if (a === "f") {
            cantidad = cantidad * (9 / 5) - 459.67;
        }
    } else if (de === "c") {
        if (a === "k") {
            cantidad += 273.15;
        } else if (a === "f") {
            cantidad = cantidad * (9 / 5) + 32;
        }
    } else if (de === "f") {
        if (a === "k") {
            cantidad = (cantidad + 459.67) * (5 / 9);
        } else if (a === "c") {
            cantidad = (cantidad - 32) * (5 / 9);
        }

        //sustancia
    } else if (de === "mol") {
        if (a === "g") {
            cantidad *= 1 / 0.001008;
        } else if (a === "kg") {
            cantidad *= 1 / 0.000001008;
        }
    } else if (de === "g") {
        if (a === "mol") {
            cantidad *= 0.001008;
        } else if (a === "kg") {
            cantidad /= 1000;
        }

        //longitud
    } else if (de == "km") {
         cantidad *= 1000;
     } else if (de == "ft") {
         cantidad *= 0.3048;
     } else if (de == "in") {
         cantidad *= 0.0254;
     }


     if (a == "km") {
         cantidad /= 1000;
     } else if (a == "ft") {
         cantidad /= 0.3048;
     } else if (a == "in") {
         cantidad /= 0.0254;
     }



    document.getElementById("resultado").innerHTML = cantidad + " " + a;
}
