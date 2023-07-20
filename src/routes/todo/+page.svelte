<script>
  import { dataset_dev } from 'svelte/internal'
  import App1 from '../../components/App1.svelte'
  import TodoList from '../../components/TodoList.svelte'

  /** @type {import('./$types').PageData} */
  export let data

  let times = 0
  /*
  function deleteTask(id) {
    tasks = task.filter((task) => task.id !== id)
  }
*/
  function swapStates() {
    myTasks.completed = !myTasks.completed
  }

  async function changeStatus(task) {
    const data = { id: task.id, completed: !task.completed }

    const response = await fetch('?/changeStatus', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    console.log('response from server', response.status, response.body)
  }

  async function deleteTask(task) {
    const response = await fetch('?/deleteTask', {
      method: 'POST',
      body: JSON.stringify(task),
    })
    console.log('delete row response ', response.status, response.body)
    location.reload()
  }
</script>

<h1>My tasks</h1>
<p>Here you can create a to-do list</p>

<form method="POST" action="?/createTask">
  <label class="mb-3">
    Task Name
    <input name="taskName" type="text" class="form-control" />
  </label>
  <br />
  <button class="btn btn-primary">Create Task</button>
</form>

<form method="POST" action="?/changeStatus">
  <label class="mb-3">
    Task Name
    <input name="taskName" type="text" class="form-control" />
  </label>
  <br />

  <button class="btn btn-primary">Create Task</button>
</form>

<ul>
  {#each data.tasks as task}
    <li>{task.id}, {task.text}, {task.completed}</li>
  {/each}
</ul>

<table class="col-8 table table-hover">
  <tr style="background-color: dodgerblue;">
    <th>id</th>
    <th>name</th>
    <th>status</th>
    <th>Deletetask</th>
  </tr>
  <br />

  {#each data.tasks as task}
    <tr>
      <td>{task.id}</td>
      <td>{task.text}</td>
      <td
        ><div class="col-4">{task.completed}</div>
        <button class="btn btn-primary" on:click={() => changeStatus(task)}
          >Change Status</button
        ></td
      >

      <td
        ><button class="btn btn-primary" on:click={() => deleteTask(task)}
          >Delete</button
        >
      </td>
    </tr>
  {/each}
</table>
<br />

<p>choose one of the Following :</p>
<form>
  <input type="radio" id="html" name="fav_language" />
  <label for="html">react</label><br />
  <input type="radio" id="css" name="fav_language" />
  <label for="css">nextJS</label><br />
  <input type="radio" id="javascript" name="fav_language" />
  <label for="javascript">JavaScript</label>
</form>
<!-- 
{#if myTasks.completed}
  <p>True</p>
{:else}
  <p>False</p>
{/if}
-->
<!-- 
<App1 name={'Peter'}>In between</App1>
<TodoList taskname={'Home Task'} />
<TodoList taskname={'Work Task'} />
<App1 />

{#each data.tasks as task}
  <h1>{task.id}, {task.text}, {task.completed}</h1>
{/each}

array -->
<!--
<button on:click={() => times++}>printarray({times}) </button>

{#each { length: times } as _, i}
  {#each data.tasks as task}
    <h1>{i + 1}) {task.id}, {task.text}, {task.completed}</h1>
  {/each}
{/each}
-->
