<script>
  let tasks = []
  let newTask = ''
  export let taskname

  function addTask() {
    if (newTask !== '') {
      tasks = [...tasks, { id: Date.now(), text: newTask, completed: false }]
      newTask = ''
    }
  }

  function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id)
  }

  function toggleCompletion(id) {
    tasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  }
</script>

<main>
  <h1>{taskname}</h1>

  <input type="text" bind:value={newTask} placeholder="Enter a new task" />

  <button on:click={addTask}>Add Task</button>

  <ul>
    {#each tasks as task (task.id)}
      <li class={task.completed ? 'completed' : ''}>
        <input
          type="checkbox"
          bind:checked={task.completed}
          on:change={() => toggleCompletion(task.id)}
        />
        <span>{task.text}</span>
        <button on:click={() => deleteTask(task.id)}>Delete Task</button>
      </li>
    {/each}
  </ul>
</main>

<div class="page-content page-container" id="page-content">
  <div class="padding">
    <div class="row container d-flex justify-content-center">
      <div class="col-md-12">
        <div class="card px-3">
          <div class="card-body">
            <h4 class="card-title">Awesome Todo list</h4>
            <div class="add-items d-flex">
              <input
                type="text"
                class="form-control todo-list-input"
                placeholder="What do you need to do today?"
              />
              <button
                class="add btn btn-primary font-weight-bold todo-list-add-btn"
                >Add</button
              >
            </div>
            <div class="list-wrapper">
              <ul class="d-flex flex-column-reverse todo-list">
                <li>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="checkbox" type="checkbox" /> For what reason
                      would it be advisable. <i class="input-helper" /></label
                    >
                  </div>
                  <i class="remove mdi mdi-close-circle-outline" />
                </li>
                <li class="completed">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="checkbox" type="checkbox" checked="" /> For
                      what reason would it be advisable for me to think.
                      <i class="input-helper" /></label
                    >
                  </div>
                  <i class="remove mdi mdi-close-circle-outline" />
                </li>
                <li>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="checkbox" type="checkbox" /> it be advisable
                      for me to think about business content?
                      <i class="input-helper" /></label
                    >
                  </div>
                  <i class="remove mdi mdi-close-circle-outline" />
                </li>
                <li>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="checkbox" type="checkbox" />
                      Print Statements all <i class="input-helper" /></label
                    >
                  </div>
                  <i class="remove mdi mdi-close-circle-outline" />
                </li>
                <li class="completed">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="checkbox" type="checkbox" checked="" /> Call
                      Rampbo <i class="input-helper" /></label
                    >
                  </div>
                  <i class="remove mdi mdi-close-circle-outline" />
                </li>
                <li>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="checkbox" type="checkbox" />
                      Print bills <i class="input-helper" /></label
                    >
                  </div>
                  <i class="remove mdi mdi-close-circle-outline" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .completed {
    text-decoration: line-through;
  }
</style>
