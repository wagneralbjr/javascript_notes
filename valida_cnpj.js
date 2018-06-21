function valida_cnpj(value){
    //tento converter para número, se não consegue não tem caracteres válidos.
    //utilizado esse algoritmo : http://www.macoratti.net/alg_cnpj.htm
    
    
    if (typeof value == 'number'){
            value = String(value);      
    }
    
    value = value.replace('.','');
    value = value.replace('.','');
    value = value.replace('/','');
    value = value.replace('-','');
    //console.log(value);
    
    if (value.length != 14){
        return 'invalido';
    }
    
    if ( String(Number(value)) == 'NaN'){
        return 'invalido';
    }
    
    //5,4,3,2,9,8,7,6,5,4,3 e 2 digito 1
    digito1 = ( Number(value[0]) * 5 + Number(value[1]) * 4 + Number(value[2]) * 3 + Number(value[3]) * 2 + 
            Number(value[4]) * 9 + Number(value[5]) * 8 + Number(value[6]) * 7 + Number(value[7]) * 6 +
            Number(value[8]) * 5 + Number(value[9]) * 4 + Number(value[10]) * 3  + Number(value[11]) * 2);

    digito1 = digito1 % 11;
    if( digito1 < 2 ) 
        digito1 = 0;
    else
        digito1 = 11 - digito1;
    
    //  value[12] = digito1;
    if (value[12] != digito1)
        return 'invalido';

    digito2 = (Number(value[0]) * 6 +  Number(value[1]) * 5 + Number(value[2]) * 4 + Number(value[3]) * 3 + Number(value[4]) * 2 + 
            Number(value[5]) * 9 + Number(value[6]) * 8 + Number(value[7]) * 7 + Number(value[8]) * 6 +
            Number(value[9]) * 5 + Number(value[10]) * 4    + Number(value[11]) * 3  + Number(value[12]) * 2);
    
    digito2 = digito2 % 11;
    
    if( digito2 < 2 ) 
        digito2 = 0;
    else
        digito2 = 11 - digito2;

    if (value[13] != digito2)
        return 'invalido'

    return 'valido';
}

var cnpj_val = valida_cnpj(cnpj);
