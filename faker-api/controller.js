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
    });

    app.get('/faker/lorem', function (req, res) {
        var fakerLoremDetails = {
            words: Faker.Lorem.words(),
            sentence: Faker.Lorem.sentence(),
            sentences: Faker.Lorem.sentences(),
            paragraph: Faker.Lorem.paragraph(),
            paragraphs: Faker.Lorem.paragraphs()
        };

        res.json(fakerLoremDetails);
    });

    app.get('/faker/date', function (req, res) {
        var fakerDateDetails = {
            past: Faker.Date.past(),
            future: Faker.Date.future(),
            between: Faker.Date.between(),
            recent: Faker.Date.recent()
        };

        res.json(fakerDateDetails);
    });
    
    app.get('/faker/random', function (req, res) {
        var fakerRandomDetails = {
            number: Faker.random.number(),
            //array_element: Faker.random.array_element(),
            city_prefix: Faker.random.city_prefix(),
            city_suffix: Faker.random.city_suffix(),
            street_suffix: Faker.random.street_suffix(),
            br_state: Faker.random.br_state(),
            br_state_abbr: Faker.random.br_state_abbr(),
            us_state: Faker.random.us_state(),
            us_state_abbr: Faker.random.us_state_abbr(),
            uk_county: Faker.random.uk_county(),
            uk_country: Faker.random.uk_country(),
            first_name: Faker.random.first_name(),
            last_name: Faker.random.last_name(),
            name_prefix: Faker.random.name_prefix(),
            name_suffix: Faker.random.name_suffix(),
            catch_phrase_adjective: Faker.random.catch_phrase_adjective(),
            catch_phrase_descriptor: Faker.random.catch_phrase_descriptor(),
            catch_phrase_noun: Faker.random.catch_phrase_noun(),
            bs_adjective: Faker.random.bs_adjective(),
            bs_buzz: Faker.random.bs_buzz(),
            bs_noun: Faker.random.bs_noun(),
            phone_formats: Faker.random.phone_formats(),
            domain_suffix: Faker.random.domain_suffix(),
            avatar_uri: Faker.random.avatar_uri()
        };

        res.json(fakerRandomDetails);
    });

    app.get('/faker/definitions', function (req, res) {
        var fakerDefinitions = {
            first_name: Faker.definitions.first_name,
            last_name: Faker.definitions.last_name,
            name_prefix: Faker.definitions.name_prefix,
            name_suffix: Faker.definitions.name_suffix,
            br_state: Faker.definitions.br_state,
            br_state_abbr: Faker.definitions.br_state_abbr,
            us_state: Faker.definitions.us_state,
            us_state_abbr: Faker.definitions.us_state_abbr,
            city_prefix: Faker.definitions.city_prefix,
            city_suffix: Faker.definitions.city_suffix,
            street_suffix: Faker.definitions.street_suffix,
            uk_county: Faker.definitions.uk_county,
            uk_country: Faker.definitions.uk_country,
            catch_phrase_adjective: Faker.definitions.catch_phrase_adjective,
            catch_phrase_descriptor: Faker.definitions.catch_phrase_descriptor,
            catch_phrase_noun: Faker.definitions.catch_phrase_noun,
            bs_adjective: Faker.definitions.bs_adjective,
            bs_buzz: Faker.definitions.bs_buzz,
            bs_noun: Faker.definitions.bs_noun,
            domain_suffix: Faker.definitions.domain_suffix,
            lorem: Faker.definitions.lorem,
            phone_formats: Faker.definitions.phone_formats,
            avatar_uri: Faker.definitions.avatar_uri
        };

        res.json(fakerDefinitions);
    });
}

module.exports = FakerController;