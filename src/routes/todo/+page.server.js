/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return {
    tasks:
      [
        { id: '12345', text: 'Do groceries', completed: false },
        { id: '4567', text: 'Learn SvelteKit', completed: true }
      ]
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    console.log('action recieved', data)

  }
};