// With Thunk you can return a function
// export default function createProject(project) {
export const createProject = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    // make asynch call to database
    // pause dispatch until following is complete
    const firestore = getFirestore();
    //returns a promise. function fired  after then
    // Add new document to project store
    // based off the createProject component state
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'stephan',
      authorLastName: 'Tyrrrell',
      authorId: 12345,
      createAt: new Date()
    }).then(() => {
      // once complete fire dispatcher to projectReducer
      dispatch({ type: 'CREATE_PROJECT_SUCCESS', project });
    }).catch((err) => {
      // once complete fire dispatcher to projectReducer
      dispatch({ type: 'CREATE_PROJECT_ERROR', err });
    })
  }
};
