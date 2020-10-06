export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7bce793e2aa9950405a2a7',
                  title: 'Sanity Studio',
                  name: 'harborage-studio',
                  apiId: 'd19dd915-95a0-4c3e-b012-4b3de17b1f52'
                },
                {
                  buildHookId: '5f7bce798331a3c8d5822159',
                  title: 'Blog Website',
                  name: 'harborage',
                  apiId: 'f95ebbbf-aabd-4863-bed0-7030abae8246'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Zeerti/harborage',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://harborage.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
