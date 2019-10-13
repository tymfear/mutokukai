(function() {
    'use strict';
    angular.module('mutokukai')
        .service('InstructorsService', InstructorsService);

    function InstructorsService() {
        var instructors = this;

        instructors.list = [{
                id: 1,
                instructorName: 'Даудов Тимур',
                instructorRank: '3-й дан Айкидо Айкикай',
                skype: 'tymfear',
                email: 'tymfear@gmail.com',
                phones: ['38-066-212-90-26']
            },
            {
                id: 2,
                instructorName: 'Колтун Андрей',
                instructorRank: '3-й дан Айкидо Айкикай',
                email: 'samuray_studio@mail.ru',
                phones: ['38-066-630-24-24', '38-097-946-41-39'],
                skype: 'deltaandrey'
            },
            {
                id: 3,
                instructorName: 'Луговой Николай',
                instructorRank: '1-й дан Айкидо Айкикай',
                email: 'varan_com@ukr.net',
                phones: ['38-095-259-77-08']
            },
            {
                id: 4,
                instructorName: 'Кривошей Анатолий',
                instructorRank: '3-й дан Айкидо Айкикай',
                phones: ['38-050-592-92-09']
            }
        ];

        instructors.getInstructor = function(id) {
            for (var i = 0; i < instructors.list.length; i++) {
                var instructor = instructors.list[i];

                if (instructor.id === id) {
                    return instructor;
                }
            }
        };
    }
})();