function kgTOLbs(weight:number | string):number{

    if( typeof weight=== 'number')
        return weight *1.5;
    else
        return parseInt(weight)
}
kgTOLbs(10);
kgTOLbs('10')