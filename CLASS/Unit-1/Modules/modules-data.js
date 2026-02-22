const companyState = {
    name: 'TutorialsPoint',
    locations: ['Hyderabad', 'Pune', 'Bengaluru'],
};

const getCompanyName = () => companyState.name;

const setCompanyName = (newName) => {
    companyState.name = newName;
};

const addLocation = (city) => {
    if (!companyState.locations.includes(city)) {
        companyState.locations.push(city);
    }
};

const listLocations = () => [...companyState.locations];

export { addLocation, getCompanyName, listLocations, setCompanyName };

const companyProfile = {
    getName: () => getCompanyName().toUpperCase(),
    rename: (nextName) => setCompanyName(nextName),
    registerOffice: (city) => addLocation(city),
    offices: () => listLocations(),
};

export default companyProfile;