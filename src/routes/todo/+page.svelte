<script>
  import { dataset_dev } from 'svelte/internal'
  import App1 from '../../components/App1.svelte'
  import TodoList from '../../components/TodoList.svelte'

  /** @type {import('./$types').PageData} */
  export let data

  let times = 0
</script>

<h1>My tasks</h1>
<p>Here you can create a to-do list</p>

<form method="POST">
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
  </tr>
  <br />

  {#each data.tasks as task}
    <tr>
      <td>{task.id}</td>
      <td>{task.text}</td>
      <td>{task.completed}</td>
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
