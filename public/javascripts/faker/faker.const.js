(function () {
    'use strict';

    angular.module('faker.samples')
        .constant('fakerUris', {
            "name": "/faker/name",
            "address": "/faker/address",
            "phoneNumber": "/faker/phone-number",
            "internet": "/faker/internet",
            "company": "/faker/company",
            "image": "/faker/image"
        });
}());