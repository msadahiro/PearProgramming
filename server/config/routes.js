const faker = require('faker');

const projects = [
  {
    id: faker.random.uuid(),
    title: 'Lunch Spots',
    description: 'A dojo review of nearby places to grab grub.',
    members: []
  },
  {
    title: 'Well, This is frustrating',
    description: 'Chrome extention that changes the font to comic sans and makes all links unusable',
    members: ['Michael'],
    id: faker.random.uuid()
  },
  {
    title: 'Pair Programming',
    description: 'Tinder... but for pair programming!',
    members: [],
    id: faker.random.uuid()
  }
]

const addMemberToProject = (projId, newMember) => {
  console.log('newMember: ', newMember)
  const project = projects.find((proj) => proj.id === projId)
  project.members.push(newMember);
  return project;
}

module.exports = function (app) {
  app.get('/projects', (req, res) => {
    console.log('GET /projects')
    res.json(projects);
  });

  app.put('/projects/:id', (req, res) => {
    console.log(req.body);
    const updatedProject = addMemberToProject(req.params.id, req.body.newMember);
    res.json(updatedProject);
  });
}