function fenntartas(){

    evjarat = Number(document.getElementById("evjarat").value);
    km = Number(document.getElementById("km").value);
    model = document.getElementById("model").value;
    care = document.querySelector('input[name="care"]:checked').value;
    modelszorzo = 1;
    final = 1.2;
 
    switch(model)
      {
        case "E12":
        if(evjarat >= 1972 && evjarat <= 1981) {
            modelszorzo = 3
            switch(care)
                {
                    case "yes":
                        modelszorzo = modelszorzo * 2 * km;
                        document.getElementById("eredmeny").value = modelszorzo * final;
                        break;
                    case "no":
                        modelszorzo = modelszorzo * km
                        document.getElementById("eredmeny").value = modelszorzo * final;
                        break;

                }
        }
        else {document.getElementById("eredmeny").value = "Nincs ilyen évjárat a választott modellből!"; break;}
        break;

        case "E28":
        if(evjarat >= 1982 && evjarat <= 1988) {
            modelszorzo = 2.8
            switch(care)
                {
                    case "yes":
                        modelszorzo = modelszorzo * 2 * km;
                        document.getElementById("eredmeny").value = modelszorzo * final;
                        break;
                    case "no":
                        modelszorzo = modelszorzo * km
                        document.getElementById("eredmeny").value = modelszorzo * final;
                        break;

                }
        }
        else {document.getElementById("eredmeny").value = "Nincs ilyen évjárat a választott modellből!"; break;}
        break;

        case "E34":
        if(evjarat >= 1989 && evjarat <= 1995) {
            modelszorzo = 2
            switch(care)
                {
                    case "yes":
                        modelszorzo = modelszorzo * 2 * km;
                        document.getElementById("eredmeny").value = modelszorzo * final;
                        break;
                    case "no":
                        modelszorzo = modelszorzo * km
                        document.getElementById("eredmeny").value = modelszorzo * final;
                        break;

                }
        }
        else {document.getElementById("eredmeny").value = "Nincs ilyen évjárat a választott modellből!"; break;}
        break;

        case "E39":
            if(evjarat >= 1997 && evjarat <= 2003) {
                modelszorzo = 1.5
                switch(care)
                    {
                        case "yes":
                            modelszorzo = modelszorzo * 2 * km;
                            document.getElementById("eredmeny").value = modelszorzo * final;
                            break;
                        case "no":
                            modelszorzo = modelszorzo * km
                            document.getElementById("eredmeny").value = "Nem igaz! Ezt az autót nem lehet nem szeretni...";
                            break;
    
                    }
            }
            else {document.getElementById("eredmeny").value = "Nincs ilyen évjárat a választott modellből!"; break;}
            break;

            case "E60":
                if(evjarat >= 2004 && evjarat <= 2010) {
                    modelszorzo = 4
                    switch(care)
                        {
                            case "yes":
                                modelszorzo = modelszorzo * 2 * km;
                                document.getElementById("eredmeny").value = modelszorzo * final;
                                break;
                            case "no":
                                modelszorzo = modelszorzo * km
                                document.getElementById("eredmeny").value = "Nem igaz! Ezt az autót nem lehet nem szeretni...";
                                break;
        
                        }
                }
                else {document.getElementById("eredmeny").value = "Nincs ilyen évjárat a választott modellből!"; break;}
                break;

                case "E61":
                if(evjarat >= 2004 && evjarat <= 2011) {
                    modelszorzo = 4
                    switch(care)
                        {
                            case "yes":
                                modelszorzo = modelszorzo * 2 * km;
                                document.getElementById("eredmeny").value = modelszorzo * final;
                                break;
                            case "no":
                                modelszorzo = modelszorzo * km
                                document.getElementById("eredmeny").value = modelszorzo * final;
                                break;
        
                        }
                }
                else {document.getElementById("eredmeny").value = "Nincs ilyen évjárat a választott modellből!"; break;}
                break;

                case "F07":
                    if(evjarat >= 2009 && evjarat <= 2017) {
                        modelszorzo = 3
                        switch(care)
                            {
                                case "yes":
                                    modelszorzo = modelszorzo * 2 * km;
                                    document.getElementById("eredmeny").value = modelszorzo * final;
                                    break;
                                case "no":
                                    modelszorzo = modelszorzo * km
                                    document.getElementById("eredmeny").value = modelszorzo * final;
                                    break;
            
                            }
                    }
                    else {document.getElementById("eredmeny").value = "Nincs ilyen évjárat a választott modellből!"; break;}           
                    break;

                case "F10":
                    if(evjarat >= 2010 && evjarat <= 2016) {
                        modelszorzo = 3.2
                        switch(care)
                            {
                                case "yes":
                                    modelszorzo = modelszorzo * 2 * km;
                                    document.getElementById("eredmeny").value = modelszorzo * final;
                                    break;
                                case "no":
                                    modelszorzo = modelszorzo * km
                                    document.getElementById("eredmeny").value = modelszorzo * final;
                                    break;
            
                            }
                    }
                    else {document.getElementById("eredmeny").value = "Nincs ilyen évjárat a választott modellből!"; break;}    
                    break;

                case "F11":
                    if(evjarat >= 2011 && evjarat <= 2017) {
                        modelszorzo = 3.4
                        switch(care)
                            {
                                case "yes":
                                    modelszorzo = modelszorzo * 2 * km;
                                    document.getElementById("eredmeny").value = modelszorzo * final;
                                    break;
                                case "no":
                                    modelszorzo = modelszorzo * km
                                    document.getElementById("eredmeny").value = modelszorzo * final;
                                    break;
            
                            }
                    }
                    else {document.getElementById("eredmeny").value = "Nincs ilyen évjárat a választott modellből!"; break;}                
                    break;

                case "F90":
                    if(evjarat >= 2018) {
                        modelszorzo = 3.6
                        switch(care)
                            {
                                case "yes":
                                    modelszorzo = modelszorzo * 2 * km;
                                    document.getElementById("eredmeny").value = modelszorzo * final;
                                    break;
                                case "no":
                                    modelszorzo = modelszorzo * km
                                    document.getElementById("eredmeny").value = "Nem igaz! Ezt az autót nem lehet nem szeretni...";
                                    break;
            
                            }
                    }
                    else {document.getElementById("eredmeny").value = "Nincs ilyen évjárat a választott modellből!"; break;}
                    break;

                    case "G30":
                        if(evjarat >= 2017) {
                            modelszorzo = 3.8
                            switch(care)
                                {
                                    case "yes":
                                        modelszorzo = modelszorzo * 2 * km;
                                        document.getElementById("eredmeny").value = modelszorzo * final;
                                        break;
                                    case "no":
                                        modelszorzo = modelszorzo * km
                                        document.getElementById("eredmeny").value = modelszorzo * final;
                                        break;
                
                                }
                        }
                        else {document.getElementById("eredmeny").value = "Nincs ilyen évjárat a választott modellből!"; break;}
                        break;

                        case "G31":
                            if(evjarat >= 2017) {
                                modelszorzo = 3.8
                                switch(care)
                                    {
                                        case "yes":
                                            modelszorzo = modelszorzo * 2 * km;
                                            document.getElementById("eredmeny").value = modelszorzo * final;
                                            break;
                                        case "no":
                                            modelszorzo = modelszorzo * km
                                            document.getElementById("eredmeny").value = modelszorzo * final;
                                            break;
                    
                                    }
                            }
                            else {document.getElementById("eredmeny").value = "Nincs ilyen évjárat a választott modellből!"; break;}
                            break;
      }

}



