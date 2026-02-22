import companyProfile, {
    addLocation,
    getCompanyName,
    listLocations,
    setCompanyName,
} from './modules-data.js';

console.log('--- Module Demo ---');
console.log('Initial name:', getCompanyName());
console.log('Uppercase default export:', companyProfile.getName());

setCompanyName('Cascade Studios');
console.log('Renamed company:', getCompanyName());

addLocation('Chennai');
addLocation('Pune');
console.log('Registered offices:', listLocations());

companyProfile.rename('Aurora Web Tech');
console.log('Default export rename:', companyProfile.getName());
console.log('Offices via default export:', companyProfile.offices());