<script>
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
    Email
    <input name="email" type="email" class="form-control" />
  </label>
  <br />
  <label class="mb-3">
    Password
    <input name="password" type="password" class="form-control" />
  </label>
  <br />
  <button class="btn btn-primary">Log in</button>
</form>
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
