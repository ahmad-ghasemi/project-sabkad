const PersonalRoute=require('./TblPersonal.routes');
module.exports=(Router)=>{
    PersonalRoute(Router);
    return Router;
}