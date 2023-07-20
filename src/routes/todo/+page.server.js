function generateId() {
  return Math.random().toString(36).substring(2);
}

let myTasks = [
  { id: generateId(), text: 'Do groceries', completed: false },
  { id: generateId(), text: 'Learn SvelteKit', completed: true }
]

function findTask(task) {
  return myTasks.map(task => task.id).indexOf(task.id)
}

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return {
    tasks: myTasks
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  createTask: async ({ request }) => {
    const data = await request.formData();
    console.log('action recieved', data)
    const taskName = data.get('taskName');
    const newTask = { id: generateId(), text: taskName, completed: false }
    myTasks.push(newTask)

  },
  changeStatus: async ({ request }) => {
    const data = await request.json();
    console.log('change status', data)
    myTasks.findIndex()

  },
  deleteTask: async ({ request }) => {
    const task = await request.json();
    console.log('delete task', task);
    const index = findTask(task);
    console.log('task index ' + index)
    if (index > -1) {
      myTasks.splice(index, 1);
      console.log('task after delete', myTasks)
    }
  },
};

/** @type {import('./$types').RequestHandler} */
export async function _DELETE({ request }) {
  const data = await request.json();
  console.log('delete row data', data)
  const index = myTasks.indexOf(data);
  if (index > -1) {
    myTasks.splice(index, 1);
  }
}
