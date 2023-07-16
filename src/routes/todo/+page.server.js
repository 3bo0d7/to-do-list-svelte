
let myTasks = [
  { id: '12345', text: 'Do groceries', completed: false },
  { id: '4567', text: 'Learn SvelteKit', completed: true }
]

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return {
    tasks: myTasks

  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    console.log('action recieved', data)
    const taskName = data.get('taskName');
    const newTask = { id: '12345', text: taskName, completed: false }
    myTasks.push(newTask)


  }
};