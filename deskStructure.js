export const myStructure = (S) =>
  S.list()
    .title('Craighead Diocesan School')
    .items([
      S.listItem().title('General').child(S.document().schemaType('general').documentId('general')),
      S.listItem()
        .title(`Nav Bar`)
        .child(
          S.document().schemaType('navBar').documentId('91e6df21-7009-4e3f-9ffe-926d166d2ea0')
        ),
      S.listItem()
        .title('Landing Page')
        .child(
          S.list()
            // Sets a title for our new list
            .title('Landing page sections')
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title(`Landing Video`)
                .child(S.document().schemaType('video').documentId('video')),
              // S.listItem()
              //   .title(`Tile Images`)
              //   .child(S.document().schemaType('tileImages').documentId('tileImages')),
              S.listItem()
                .title(`Tile Images`)
                .child(S.document().schemaType('tiles').documentId('195d9080-c2e2-409d-9f0e-838daa153372')),
              S.listItem()
                .title(`Students' Welcome`)
                .child(S.document().schemaType('studentWelcome').documentId('studentWelcome')),
              S.listItem()
                .title(`Principal's Welcome`)
                .child(
                  S.document().schemaType('principalsWelcome').documentId('principalsWelcome')
                ),
              S.listItem()
                .title(`Student Spotlights`)
                .child(
                  S.document().schemaType('studentSpotlights').documentId('studentSpotlights')
                ),
              S.listItem()
                .title(`Academic Performance`)
                .child(
                  S.document().schemaType('academicPerformance').documentId('academicPerformance')
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Enrolment')
        .child(
          S.list()
            // Sets a title for our new list
            .title(`'Enrolment' page sections`)
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title(`Header`)
                .child(S.document().schemaType('header').documentId('enrolmentHeader')),
              S.listItem()
                .title(`Girls`)
                .child(S.document().schemaType('section').documentId('girlsSection')),
              S.listItem()
                .title(`Domestic`)
                .child(S.document().schemaType('section').documentId('domesticSection')),
              S.listItem()
                .title(`International`)
                .child(S.document().schemaType('section').documentId('internationalSection')),
            ])
        ),
      S.listItem()
        .title('Our School')
        .child(
          S.list()
            // Sets a title for our new list
            .title(`'Our School' page sections`)
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title(`Header`)
                .child(S.document().schemaType('header').documentId('ourSchoolHeader')),
              // S.listItem()
              //   .title(`Academic Performance`)
              //   .child(S.document().schemaType('section').documentId('academicPerformanceSection')),
              S.listItem()
                .title(`School Structure`)
                .child(S.document().schemaType('section').documentId('schoolStructureSection')),
              S.listItem()
                .title(`Our People`)
                .child(S.document().schemaType('section').documentId('ourPeopleSection')),
              S.listItem()
                .title(`Boarding`)
                .child(S.document().schemaType('section').documentId('boardingSection')),
              S.listItem()
                .title(`Learning Support`)
                .child(S.document().schemaType('section').documentId('learningSupportSection')),
              S.listItem()
                .title(`Sporting`)
                .child(S.document().schemaType('section').documentId('sportingSection')),
              S.listItem()
                .title(`Cultural`)
                .child(S.document().schemaType('section').documentId('culturalSection')),
            ])
        ),
      S.listItem()
        .title('About Us')
        .child(
          S.list()
            // Sets a title for our new list
            .title(`'About Us' page sections`)
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title(`Header`)
                .child(S.document().schemaType('header').documentId('aboutUsHeader')),
              S.listItem()
                .title(`Special Character`)
                .child(S.document().schemaType('section').documentId('specialCharacterSection')),
              S.listItem()
                .title(`Old Girls`)
                .child(S.document().schemaType('section').documentId('oldGirlsSection')),
              S.listItem()
                .title(`History`)
                .child(S.document().schemaType('section').documentId('historySection')),
              S.listItem()
                .title(`Facilities Hire`)
                .child(S.document().schemaType('section').documentId('facilitiesHireSection')),
            ])
        ),
        S.listItem()
        .title('Our People')
        .child(
          S.documentTypeList('our-people').title('Our People')
        ),
      S.listItem()
        .title('Pages')
        .child(
          S.documentTypeList('page').title('Pages')
        ),
      S.divider(),
      S.listItem()
        .title('Footer')
        .child(
          S.list()
            // Sets a title for our new list
            .title(`Footer sections`)
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title(`Address`)
                .child(S.document().schemaType('address').documentId('address')),
              S.listItem()
                .title(`Useful Links`)
                .child(S.document().schemaType('usefulLinks').documentId('usefulLinks')),
            ])
        ),
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'studentWelcome',
            'principalsWelcome',
            'studentSpotlights',
            'academicPerformance',
            'header',
            'section',
            'address',
            'usefulLinks',
            'general',
            'article',
            'paragraph',
            'tileImages',
            'video',
            'page',
            'pageHeader',
            'pageSection',
            'pageParagraph',
            'pageTile',
            'navBar',
            'navMenu',
            'navItem',
            'tiles',
            'peopleSection',
            'personTile',
          ].includes(listItem.getId())
      ),
    ])
