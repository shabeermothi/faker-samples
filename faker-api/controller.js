var Faker = require('Faker');

function FakerController (app) {

    app.get('/faker/name', function (req, res) {
        const fakerNameDetails = {
            firstName: Faker.Name.firstName(),
            firstNameFemale: Faker.Name.firstNameFemale(),
            firstNameMale: Faker.Name.firstNameMale(),
            lastName: Faker.Name.lastName(),
            findName: Faker.Name.findName()
        };

        res.json(fakerNameDetails);
    });

    app.get('/faker/address', function (req, res) {
        const fakerAddressDetails = {
            zipCode: Faker.Address.zipCode(),
            city: Faker.Address.city(),
            streetName: Faker.Address.streetName(),
            streetAddress: Faker.Address.streetAddress(),
            secondaryAddress: Faker.Address.secondaryAddress(),
            brState: Faker.Address.brState(),
            ukCounty: Faker.Address.ukCounty(),
            ukCountry: Faker.Address.ukCountry(),
            usState: Faker.Address.usState(),
            latitude: Faker.Address.latitude(),
            longitude: Faker.Address.longitude()
        };

        res.json(fakerAddressDetails);
    });

    app.get('/faker/phone-number', function (req, res) {
        const fakerPhoneNumberDetails = {
            phoneNumber: Faker.PhoneNumber.phoneNumber()
        };

        res.json(fakerPhoneNumberDetails);
    });

    app.get('/faker/internet', function (req, res) {
        const fakerInternetDetails = {
            email: Faker.Internet.email(),
            userName: Faker.Internet.userName(),
            domainName: Faker.Internet.domainName(),
            domainWord: Faker.Internet.domainWord(),
            ip: Faker.Internet.ip(),
            color: Faker.Internet.color()
        };

        res.json(fakerInternetDetails);
    });

    app.get('/faker/company', function (req, res) {
        const fakerCompanyDetails = {
            suffixes: Faker.Company.suffixes(),
            companyName: Faker.Company.companyName(),
            companySuffix: Faker.Company.companySuffix(),
            catchPhrase: Faker.Company.catchPhrase(),
            bs: Faker.Company.bs()
        };

        res.json(fakerCompanyDetails);
    });

    app.get('/faker/image', function (req, res) {
        var fakerImageDetails = {
            avatar: Faker.Image.avatar(),
            imageUrl: Faker.Image.imageUrl(),
            abstractImage: Faker.Image.abstractImage(),
            animals: Faker.Image.animals(),
            business: Faker.Image.business(),
            cats: Faker.Image.cats(),
            city: Faker.Image.city(),
            food: Faker.Image.food(),
            nightlife: Faker.Image.nightlife(),
            fashion: Faker.Image.fashion(),
            people: Faker.Image.people(),
            nature: Faker.Image.nature(),
            sports: Faker.Image.sports(),
            technics: Faker.Image.technics(),
            transport: Faker.Image.transport()
        };

        res.json(fakerImageDetails);
    })
}

module.exports = FakerController;