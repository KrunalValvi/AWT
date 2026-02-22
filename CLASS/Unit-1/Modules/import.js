// let company = "TutorialsPoint"
// let getCompany = function(){
//    return company.toUpperCase()
// }
// let setCompany = function(newValue){
//    company = newValue
// }
// export {company,getCompany,setCompany}


// default export
let name2 = "Google";
let company = {
    getComp:function() {
        return name2.toUpperCase();
    },
    setComp:function(newValue) {
        name2 = newValue;
    }
}

export default company;