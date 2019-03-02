const initState = {
  projects: [
    { id: '1', title: 'this is a project1', content: 'blah black1' },
    { id: '2', title: 'this is a project2', content: 'blah black2' },
    { id: '3', title: 'this is a project3', content: 'blah black3' }
  ]
}
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log("Created project ", action.project)
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log("create proejct error ", action.err);
      return state;
    default:
      return state
  }
};
export default projectReducer;
