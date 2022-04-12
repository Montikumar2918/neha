

function valuetypeof(myvalue){
    if(myvalue == "true" || myvalue == "false"){
        return Boolean(myvalue);
    }
    // else if( parseInt(myvalue) == myvalue){
    //     return parseInt(myvalue);
    // }
    else if( myvalue == undefined){
        return '" "';
    }
    else{
        return '"' + myvalue.replace(/[\r\n\xa0\x0B\x0C\u0085\u2028\u2029]+/g, "").replace(" ", "") + '"';
    }
}

export function labeltypeof(myvalue){
    if(myvalue == "true" || myvalue == "false"){
        return Boolean(myvalue);
    }
    // else if( parseInt(myvalue) == myvalue){
    //     return parseInt(myvalue);
    // }
    else if( myvalue == undefined){
        return '" "';
    }
    else{
        return '"' + myvalue.replace(/[\r\n\xa0\x0B\x0C\u0085\u2028\u2029]+/g, " ") + '"';
    }
}


export function converttojson(messagebody, sheetdata) {

    let messagetext = messagebody;

    let statustext = true;

    let statuscode = 200;

    let getRows = sheetdata.data.values // GET VALUES OF SHEET INCLUDING TITLES

    let gettitle = getRows.shift(); //REMOVE FIRST ROW TO GET VALLUES

    let getdata = '';

    for (let itemsindex = 0; itemsindex < getRows.length; itemsindex++) {
        for (let titleindex = 0; titleindex < gettitle.length; titleindex++) {
            if (gettitle[titleindex] == gettitle[0] && getRows[itemsindex] == getRows[0]) {
                getdata += '{ "message": "' + messagetext + '","status":' + statustext + ',"statuscode":' + statuscode + ',"data" :[{' + valuetypeof(gettitle[titleindex]) + ':' + labeltypeof(getRows[itemsindex][titleindex]);
            } else if (gettitle[titleindex] == gettitle[0]) {
                getdata += ',{' + valuetypeof(gettitle[titleindex]) + ':' + labeltypeof(getRows[itemsindex][titleindex]);
            } else if (gettitle[titleindex] == gettitle[gettitle.length - 1] && getRows[itemsindex] == getRows[getRows.length - 1]) {
                getdata += ',' + valuetypeof(gettitle[titleindex]) + ':' + labeltypeof(getRows[itemsindex][titleindex]) + '}]}';
            } else if (gettitle[titleindex] == gettitle[gettitle.length - 1]) {
                getdata += ',' + valuetypeof(gettitle[titleindex]) + ':' + labeltypeof(getRows[itemsindex][titleindex]) + '}';
            } else {
                getdata += ',' + valuetypeof(gettitle[titleindex]) + ':' + labeltypeof(getRows[itemsindex][titleindex]);
            }
        }
    }

    // return JSON.stringify(getdata, null, 2);
    // return  typeof(Number(getRows[0][0])) == "number";
    // return getdata;
    return JSON.parse(getdata);
}

export function toFilter(filters, arrayojson){

    console.log(arrayojson)
    arrayojson.filter(user => {
        let isValid = true;
        for (key in filters) {
            if(!filters[key]){
                console.log(filters[key])
                isValid = isValid;
            }else{
                isValid = isValid && user[key] == filters[key];
            }
        }
        return filters;
    }); 
}
  
